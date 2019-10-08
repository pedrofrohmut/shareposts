/* eslint-disable react/jsx-props-no-spreading */

import React, { createContext, useState } from "react"
// import jwtDecode from "jwt-decode"

const INITIAL_STATE = {
  user: undefined
}

// export const getAuthToken = () => localStorage.getItem("@SharePosts/authToken")

// export const setAuthToken = token =>
//   localStorage.setItem("@SharePosts/authToken", token)

// export const removeAuthToken = () =>
//   localStorage.removeItem("@SharePosts/authToken")

// if (getAuthToken()) {
//   const decodedToken = jwtDecode(getAuthToken())
//   if (decodedToken.exp * 1000 < Date.now()) {
//     removeAuthToken()
//   } else {
//     INITIAL_STATE.user = decodedToken
//   }
// }

const AuthContext = createContext(INITIAL_STATE)

export const AuthProvider = props => {
  const [user, setUser] = useState(undefined)
  const signIn = userData => console.log("USER SIGN IN CONTEXT")
  const signOut = () => console.log("USER SIGN OUT CONTEXT")
  const signUp = () => console.log("USER SIGN UP CONTEXT")
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
