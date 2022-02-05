import api from "./api"

export default class TestApi {
  test() {
    return api.get("/teste");
  }
}