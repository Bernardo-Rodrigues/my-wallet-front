import api from "./api"

export default class UserApi {
  signUp(data) {
    return api.post("/signup", data);
  }

  signIn(data) {
    return api.post("/signin", data);
  }
}