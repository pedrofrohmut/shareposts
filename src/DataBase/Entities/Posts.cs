using System;

namespace SharePosts.DataBase.Entities
{
  public class Post
  {
    public string Id { get; set; }
    public string Title { get; set; }
    public string Body { get; set; }
    public DateTime CreateAt { get; set; }

    public string AuthorId { get; set; }
    public ApplicationUser Author { get; set; }
  }
}
