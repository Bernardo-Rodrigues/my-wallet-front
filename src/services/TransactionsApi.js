import api from "./api"

export default class TransactionsApi {
  getAllTransactions(headers) {
    return api.get("/transactions", headers);
  }

  registerTransaction(data, headers) {
    return api.post("/transactions", data, headers);
  }
}