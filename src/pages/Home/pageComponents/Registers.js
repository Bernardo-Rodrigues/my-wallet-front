import { RegistersElement, Transactions, Transaction, Desc, Value, Delete, Balance, NoTransactions } from "../styles"
import { fireConfirm } from "../../../utils/alerts"
import { useContext } from "react"
import { EditTransactionContext } from "../../../context/transaction"
import useApi from "../../../hooks/useApi"
import { useNavigate } from "react-router"
import { UserContext } from "../../../context/user"

export default function Registers( {userTransactions, balance, setReload} ){
    const api = useApi()
    const navigate = useNavigate()
    const { setEditTransaction } = useContext(EditTransactionContext)
    const { user, setUser } = useContext(UserContext)

    async function deleteItem(id){
        const res = fireConfirm(id)
        if (res.isConfirmed) {
            const headers = { headers: { Authorization: `Bearer ${user?.token}` }}
            try {
                await api.transactions.deleteTransaction(headers, id)
                setReload(true)
            } catch (error) {
                console.log(error.response)
                if(error.response.status === 401) {
                    setUser(null)
                    navigate("/signin")
                }
            }
        }
    }
    
    async function editUserTransaction({value, desc, type, _id}){
        setEditTransaction({value:value.replace(",","."), desc, type, _id})
        navigate("/edit")
    }

    return(
        <RegistersElement>
        {
            userTransactions.length 
            ? <>
                <Transactions>
                    {userTransactions.map( (transaction, index) => {
                        return(
                        <Transaction key={index}>
                            <Desc onClick={()=>editUserTransaction(transaction)}>
                            <span>{transaction.date}</span>
                            <p>{transaction.desc}</p>
                            </Desc>
                            <Value type={transaction.type}>
                            {transaction.value.replace(".",",")}
                            <Delete onClick={()=>deleteItem(transaction._id)}>x</Delete>
                            </Value>
                        </Transaction>
                        )  
                    })}
                </Transactions>
                <Balance type={parseFloat(balance) < 0 ? "nagative" : "positive"}><span>SALDO</span>{balance}</Balance>
                </>
            : <NoTransactions>Não há registros de entrada ou saída</NoTransactions> 
        }
        </RegistersElement>
    )
}