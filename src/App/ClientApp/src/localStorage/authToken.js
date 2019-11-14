export const getAuthToken = () => localStorage.getItem("@SharePosts/authToken")

export const setAuthToken = token =>
  localStorage.setItem("@SharePosts/authToken", token)

export const removeAuthToken = () =>
  localStorage.removeItem("@SharePosts/authToken")
