import React from "react"

import { Container } from  "reactstrap"

const PostDetailPage = ({ match }) => {
  const { postId } = match.params
  return (
    <Container>
      <h1>Post Details</h1>
      <p>Post id = {postId}</p>
    </Container>
  )
}

export default PostDetailPage
