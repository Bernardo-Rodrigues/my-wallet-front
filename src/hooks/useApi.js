import TestApi from "../services/TestApi";
import TransactionsApi from "../services/TransactionsApi";
import UserApi from "../services/UserApi";

export default function useApi() {
  return {
    user: new UserApi(),
    transactions: new TransactionsApi(),
    test: new TestApi()
  };
}