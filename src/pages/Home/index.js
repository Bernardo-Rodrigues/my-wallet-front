import { AddTrasactions, Balance, Button, Delete, Desc, Header, NoTransactions, Registers, Transaction, Transactions, Value } from "./styles";
import { ExitOutline, AddCircleOutline, RemoveCircleOutline } from 'react-ionicons'
import { useContext, useEffect, useState } from "react";
import useApi from "../../hooks/useApi";
import { useNavigate } from "react-router";
import { UserContext } from "../../context/user";
import Container from "../../components/Container";
import { EditTransactionContext } from "../../context/transaction";

export default function Home() {
  const api = useApi()
  const navigate = useNavigate()
  const [ userTransactions, setUserTransactions ] = useState([]) 
  const [ balance, setBalance ] = useState(0) 
  const [ reload, setReload ] = useState(false)
  const { user, setUser } = useContext(UserContext)
  const { setEditTransaction } = useContext(EditTransactionContext)
  
  useEffect( () => {
    if(!user) navigate("/signin")
    async function getData(){
      const headers = { headers: { Authorization: `Bearer ${user?.token}` }}
      try {
        const res = await api.transactions.getAllTransactions(headers)
        
        setUserTransactions(res.data.userTransactions)
        setBalance(res.data.balance)
      } catch (error) {
        console.log(error.response.status)
        if(error.response.status === 401) {
          setUser(null)
          navigate("/signin")
        }
      }
    }
    getData()
    setReload(false)
    //eslint-disable-next-line
  }, [reload])

  function logout(){
    setUser(null)
    navigate("/signin")
  }

  async function deleteUserTransaction(id){
    const res = window.confirm("Confirmar ?")
    if(res){
      const headers = { headers: { Authorization: `Bearer ${user?.token}` }}
      try {
        await api.transactions.deleteTransaction(headers, id)
        setReload(true)
      } catch (error) {
        console.log(error.response.status)
        if(error.response.status === 401) {
          setUser(null)
          navigate("/signin")
        }
      }
    }
  }

  async function editUserTransaction({value, desc, type, _id}){
    setEditTransaction({value, desc, type, _id})
    navigate("/edit")
  }

  return (
    <Container>
      <Header>
        <h2>Olá, {user?.username}</h2>
        <ExitOutline
          color={'#FFF'}
          height="32px"
          width="32px"
          onClick={logout}
          style={{cursor:"pointer"}}
        />
      </Header>
      <Registers>
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
                          {transaction.value}
                          <Delete onClick={()=>deleteUserTransaction(transaction._id)}>x</Delete>
                        </Value>
                      </Transaction>
                    )  
                  })}
              </Transactions>
              <Balance type={parseFloat(balance) < 0 ? "nagative" : "positive"}><span>SALDO</span>{balance}</Balance>
            </>
          : <NoTransactions>Não há registros de entrada ou saída</NoTransactions> 
        }
      </Registers>  
      
      <AddTrasactions>
        <Button onClick={()=> navigate("/entry")}>
          <AddCircleOutline
            color={'#FFF'}
            height="28px"
            width="28px"
          />
          <span>Nova<br/>entrada</span>
        </Button>
        <Button onClick={()=> navigate("/output")}>
          <RemoveCircleOutline
              color={'#FFF'}
              height="28px"
              width="28px"
            />
            <span>Nova<br/>saída</span>
        </Button>
      </AddTrasactions>
    </Container>
  );
}