import UserContextProvider from "./user"
import EditTransactionProvider from "./transaction"

export default function GlobalContext({children}){
    return (
        <UserContextProvider>
            <EditTransactionProvider>
                {children}
            </EditTransactionProvider>
        </UserContextProvider>
    )
}
