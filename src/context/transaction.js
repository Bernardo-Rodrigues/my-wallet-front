import { createContext, useState } from "react"

export const EditTransactionContext = createContext();

export default function EditTransactionProvider({children}){
    const [editTransaction, setEditTransaction] = useState({ value: '', desc: '', type:"", _id: "" });

    return <EditTransactionContext.Provider value={{editTransaction, setEditTransaction}}>{children}</EditTransactionContext.Provider>
}