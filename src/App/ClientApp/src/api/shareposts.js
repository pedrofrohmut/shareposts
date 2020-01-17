import axios from "axios"

export default {
  users: {
    signIn: ({ email, password }) =>
      axios
        .post("https://localhost:5001/api/v1/application_users/signin", {
          email,
          password
        })
        .then(response => response.data),
    signUp: ({ username, email, password }) =>
      axios
        .post("https://localhost:5001/api/v1/application_users", {
          username,
          email,
          password
        })
        .then(response => response.data)
  }
}
