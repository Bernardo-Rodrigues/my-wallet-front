import api from "./api"

export default class TransactionsApi {
  getAllTransactions(headers) {
    return api.get("/transactions", headers);
  }

  registerEntry(data) {
    return api.post("/transactions", data);
  }

  registerOutput(data) {
    return api.post("/transactions", data);
  }
}