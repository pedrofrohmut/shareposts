import React from "react"
import { Switch, Route } from "react-router-dom"

import Navbar from "./components/navigation/Navbar"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import SignInPage from "./pages/SignInPage"
import SignUpPage from "./pages/SignUpPage"
import PostsPage from "./pages/PostsPage"
import PostDetailsPage from "./pages/PostDetailsPage"

const App = () => (
  <React.Fragment>
    <Navbar />
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/about" exact component={AboutPage} />
      <Route path="/signin" exact component={SignInPage} />
      <Route path="/signup" exact component={SignUpPage} />
      <Route path="/posts" exact component={PostsPage} />
      <Route path="/post/details/:postId" exact component={PostDetailsPage} />
    </Switch>
  </React.Fragment>
)

export default App
