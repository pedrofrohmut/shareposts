import React from "react"

const PostDetailPage = ({ match }) => {
  const { postId } = match.params
  return (
    <React.Fragment>
      <h1>Post Details</h1>
      <p>Post id = {postId}</p>
    </React.Fragment>
  )
}

export default PostDetailPage
