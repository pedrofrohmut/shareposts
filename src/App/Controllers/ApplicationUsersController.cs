using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using SharePosts.Authorization;
using SharePosts.DataBase.Entities;
using SharePosts.Models.RequestBodies;

namespace SharePosts.App.Controllers
{
  [Route("api/v1/application_users")]
  [ApiController]
  public class ApplicationUsersController : ControllerBase
  {
    private readonly UserManager<ApplicationUser> userManager;
    private readonly SignInManager<ApplicationUser> signInManager;
    private readonly TokenGenerator tokenGenerator;

    public ApplicationUsersController(
        UserManager<ApplicationUser> userManager,
        SignInManager<ApplicationUser> signInManager,
        TokenGenerator tokenGenerator)
    {
      this.userManager = userManager;
      this.signInManager = signInManager;
      this.tokenGenerator = tokenGenerator;
    }

    /*
     * POST (Guest) /api/v1/application_users
     */
    [HttpPost]
    public async Task<ActionResult> SignUp([FromBody] SignUpRequestBody requestBody)
    {
      if (!ModelState.IsValid)
        return BadRequest(new { errors = new { global = "Request Body is invalid" } });
      var isEmailTaken = await this.userManager.FindByEmailAsync(requestBody.Email);
      if (isEmailTaken != null)
        return BadRequest(new { errors = new { global = "This E-mail is already taken" } });
      if (String.IsNullOrWhiteSpace(requestBody.UserName))
        requestBody.UserName = requestBody.Email;
      var applicationUser = new ApplicationUser
      {
        UserName = requestBody.UserName,
        Email = requestBody.Email
      };
      try
      {
        var result = await this.userManager.CreateAsync(applicationUser, requestBody.Password);
        if (result.Succeeded)
          return Ok(new { email = requestBody.Email });
        else
        {
          var error = result.Errors.ToList().First();
          var code = error.Code;
          var desc = error.Description;
          return BadRequest(new { errors = new { global = code + ": " + desc } });
        }
      }
      catch (Exception ex) { throw ex; }
    }

    /*
     * Post (Guest) api/v1/application_users/signin
     */
    [HttpPost]
    public async Task<ActionResult> SignIn([FromBody] SignInRequestBody requestBody)
    {
      if (!ModelState.IsValid)
        return BadRequest(new { errors = new { global = "Request Body is invalid" } });
      ApplicationUser applicationUser = await this.userManager.FindByEmailAsync(requestBody.Email);
      if (applicationUser == null || await this.userManager.CheckPasswordAsync(applicationUser, requestBody.Password) == false)
        return BadRequest(new { errors = new { global = "E-mail not found or incorrect password" } });
      var token = this.tokenGenerator.GenerateSignInToken(applicationUser.Id, applicationUser.Email, applicationUser.EmailConfirmed);
      return Ok(new
      {
        token,
        email = applicationUser.Email,
        isEmailConfirmed = applicationUser.EmailConfirmed
      });
    }
  }
}
