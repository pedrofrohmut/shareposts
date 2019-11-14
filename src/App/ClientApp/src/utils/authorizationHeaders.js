import axios from "axios"

export const setAuthorizationHeaders = (token = null) => {
  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
  }
}

export const removeAuthorizationHeaders = () => {
  axios.defaults.headers.common.Authorization = ""
}
