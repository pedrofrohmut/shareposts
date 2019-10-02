import React from "react"

import { Container } from "reactstrap"

const HomePage = () => {
  return (
    <Container>
      <div className="jumbotron jumbotron-fluid p-5">
        <Container>
          <h1 className="display-3">Share Posts</h1>
          <p className="lead">Simple social network build on the PostgreSQL + C# + AspNetCore + ReactJS stack</p>
        </Container>
      </div>
    </Container>
  )
}

export default HomePage
