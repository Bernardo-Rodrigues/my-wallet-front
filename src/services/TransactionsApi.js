import api from "./api"

export default class TransactionsApi {
  getAllTransactions(headers) {
    return api.get("/transactions", headers);
  }

  registerTransaction(data, headers) {
    return api.post("/transactions", data, headers);
  }

  deleteTransaction(headers, id) {
    return api.delete(`/transactions/${id}`, headers);
  }

  updateTransaction(body, headers, id) {
    return api.put(`/transactions/${id}`, body, headers);
  }
}