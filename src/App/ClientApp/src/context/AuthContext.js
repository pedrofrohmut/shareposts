/* eslint-disable react/jsx-props-no-spreading */
import React, { createContext, useState } from "react"
import jwtDecode from "jwt-decode"

import api from "../api/shareposts"
import {
  getAuthToken,
  setAuthToken,
  removeAuthToken
} from "../localStorage/authToken"
import {
  setAuthorizationHeaders,
  removeAuthorizationHeaders
} from "../utils/authorizationHeaders"

const INITIAL_STATE = {
  user: undefined
}

if (getAuthToken()) {
  const decodedToken = jwtDecode(getAuthToken())
  if (decodedToken.exp * 1000 < Date.now()) {
    removeAuthToken()
  } else {
    INITIAL_STATE.user = decodedToken
  }
}

const AuthContext = createContext(INITIAL_STATE)

export const AuthProvider = props => {
  const [user, setUser] = useState(undefined)
  const signIn = ({ email, password }) => {
    console.log("USER SIGN IN CONTEXT")
    api.users.signIn({ email, password }).then(authenticatedUser => {
      setAuthToken(authenticatedUser.token)
      setAuthorizationHeaders(authenticatedUser.token)
      setUser(authenticatedUser)
      console.log("authenticatedUser", authenticatedUser)
    })
  }
  const signOut = () => console.log("USER SIGN OUT CONTEXT")
  const signUp = ({ username, email, password }) => {
    console.log("USER SIGN UP CONTEXT")
    api.users.signUp({ username, email, password })
  }
  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        signOut,
        signUp
      }}
      {...props}
    />
  )
}

export default AuthContext
