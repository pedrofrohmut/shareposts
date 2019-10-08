import React, { useContext } from "react"
import PropTypes from "prop-types"

import AuthContext from "../context/AuthContext"
import SignInForm from "../components/forms/SignInForm"

import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Col,
  Container,
  Row
} from "reactstrap"

const SignInPage = ({ history }) => {
  const { signIn } = useContext(AuthContext)
  const handleSubmit = credentials => {
    signIn(credentials)
    history.push("/")
  }
  return (
    <Container>
      <Row>
        <Col className="mt-3 mx-auto" md="10">
          <Card color="light" className="px-4">
            <CardBody>
              <CardTitle tag="h1" className="mb-4">
                Sign In | User Authentication
              </CardTitle>
              <CardSubtitle className="mb-4">
                Please inform your credentials to sign in
              </CardSubtitle>
              <SignInForm onSubmit={handleSubmit} />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

SignInPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
}

export default SignInPage
