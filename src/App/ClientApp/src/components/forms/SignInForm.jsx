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

const validateUserSignIn = formData => ({
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
          : ""
})

const INITIAL_FORM_DATA = {
  email: "",
  password: ""
}

const INITIAL_FORM_ERRORS = {
  email: "",
  password: ""
}

const SignInForm = ({ onSubmit }) => {
  // const { signIn }  = useContext(AuthContext)
  const {
    values, errors, handleChange, handleSubmit, validateForm
  } = useForm(
    INITIAL_FORM_DATA,
    INITIAL_FORM_ERRORS,
    validateUserSignIn,
    onSubmit
  )
  return (
    <Form className="py-4 px-2" onSubmit={handleSubmit} method="POST">
      <pre>{JSON.stringify(values, null, 4)}</pre>
      <pre>{JSON.stringify(errors, null, 4)}</pre>
      <pre>{JSON.stringify(Object.values(errors), null, 4)}</pre>
      <div>
        {`HAS ERRORS: ${
          Object.values(errors).every(error => error === "") ? "True" : "False"
        }`}
      </div>
      <FormGroup className="mb-4">
        <Input
          type="text"
          name="email"
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
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
          onKeyUp={validateForm}
          invalid={!!errors.password}
        />
        <FormFeedback>{errors.password}</FormFeedback>
        <FormText>Inform your password registered for this account</FormText>
      </FormGroup>
      <Row>
        <Col>
          <Button color="primary">Submit</Button>
        </Col>
        <Col>
          <Link to="/signup" className="btn btn-light">
            Na account? Register here
          </Link>
        </Col>
      </Row>
    </Form>
  )
}

SignInForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default SignInForm
