import React from "react"
import PropTypes from "prop-types"

import SignUpForm from "../components/forms/SignUpForm"

import {
  Container,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Col,
  Row
} from "reactstrap"

const SignUpPage = ({ history }) => {
  const handleSubmit = () => history.push("/")
  return (
    <Container className="SignUpPage">
      <Row>
        <Col md="10" xl="8" className="mt-3 mx-auto">
          <Card color="light" className="px-4">
            <CardBody>
              <CardTitle tag="h1" className="mb-4">
                Sign Up | Create a new user
              </CardTitle>
              <CardSubtitle className="mb-4">
                Please fill up this form to register with us
              </CardSubtitle>
              <SignUpForm onSubmit={handleSubmit} />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

SignUpPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
}

export default SignUpPage
