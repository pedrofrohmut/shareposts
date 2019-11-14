import React from "react"
import { Link } from "react-router-dom"
import validator from "validator"
import PropTypes from "prop-types"

import useForm from "../../hooks/useForm"

import {
  Button,
  Col,
  Form,
  FormFeedback,
  FormGroup,
  FormText,
  Input,
  Row
} from "reactstrap"

const validateUserSignUp = formData => ({
  username:
    formData.username === ""
      ? "Username cannot be blank"
      : formData.username.length < 4
        ? "Username must be at least 4 characters long"
        : formData.username.length > 20
          ? "Username cannot be longer than 20 characters"
          : "",
  email:
    formData.email === ""
      ? "E-mail cannot be blank"
      : !validator.isEmail(formData.email)
        ? "This E-mail is not valid"
        : "",
  password:
    formData.password === ""
      ? "Password cannot be blank"
      : formData.password.length < 3
        ? "Password must be at least 3 characters long"
        : formData.password.length > 20
          ? "Password cannot be longer than 20 characters"
          : "",
  confirmPassword:
    formData.confirmPassword === ""
      ? "Confirm Password must be informed"
      : formData.confirmPassword !== formData.password
        ? "Password and Confirm Password must match"
        : ""
})

const INITIAL_FORM_DATA = {
  username: "",
  email: "",
  password: "",
  confirmPassword: ""
}

const INITIAL_FORM_ERRORS = {
  username: "",
  email: "",
  password: "",
  confirmPassword: ""
}

const SignUpForm = ({ onSubmit }) => {
  // const { signUp } = useContext(AuthContext)
  const {
    values, errors, handleChange, handleSubmit, validateForm
  } = useForm(
    INITIAL_FORM_DATA,
    INITIAL_FORM_ERRORS,
    validateUserSignUp,
    onSubmit
  )
  return (
    <Form className="py-4 px-2" onSubmit={handleSubmit}>
      <FormGroup className="mb-4">
        <Input
          type="text"
          name="username"
          id="usernameInput"
          placeholder="Username"
          value={values.username}
          onChange={handleChange}
          onKeyUp={validateForm}
          invalid={!!errors.username}
        />
        <FormFeedback>{errors.username}</FormFeedback>
        <FormText>
          Enter a username to identify yourself within the community
        </FormText>
      </FormGroup>
      <FormGroup className="mb-4">
        <Input
          type="email"
          name="email"
          id="emailInput"
          placeholder="E-mail Address"
          value={values.email}
          onChange={handleChange}
          onKeyUp={validateForm}
          invalid={!!errors.email}
        />
        <FormFeedback>{errors.email}</FormFeedback>
        <FormText>Enter a valid an active e-mail address</FormText>
      </FormGroup>
      <FormGroup className="mb-4">
        <Input
          type="password"
          name="password"
          id="passwordInput"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
          onKeyUp={validateForm}
          invalid={!!errors.password}
        />
        <FormFeedback>{errors.password}</FormFeedback>
        <FormText>Inform a secure password</FormText>
      </FormGroup>
      <FormGroup className="mb-4">
        <Input
          type="password"
          name="confirmPassword"
          id="confirmPasswordInput"
          placeholder="Confirm Password"
          value={values.confirmPassword}
          onChange={handleChange}
          onKeyUp={validateForm}
          invalid={!!errors.confirmPassword}
        />
        <FormFeedback>{errors.confirmPassword}</FormFeedback>
        <FormText>
          Retype your password here to make sure there aren't any typos
        </FormText>
      </FormGroup>
      <Row>
        <Col>
          <Button color="primary">Submit</Button>
        </Col>
        <Col>
          <Link to="/signin" className="btn btn-light">
            Have an account? Sign In Here
          </Link>
        </Col>
      </Row>
    </Form>
  )
}

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default SignUpForm
