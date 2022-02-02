import { AddTrasactions, Balance, Button, Desc, Header, NoTransactions, Registers, Transaction, Transactions, Value } from "./styles";
import { ExitOutline, AddCircleOutline, RemoveCircleOutline } from 'react-ionicons'
import { useContext, useEffect, useState } from "react";
import useApi from "../../hooks/useApi";
import { useNavigate } from "react-router";
import { UserContext } from "../../context/user";
import Container from "../../components/Container";

export default function Home() {
  const api = useApi()
  const navigate = useNavigate()
  const [ userTransactions, setUserTransactions ] = useState([]) 
  const { user, setUser } = useContext(UserContext)
  
  useEffect( () => {
    if(!user) navigate("/signin")
    async function getData(){
      const headers = { headers: { Authorization: `Bearer ${user?.token}` }}
      const res = await api.transactions.getAllTransactions(headers)
      
      setUserTransactions(res.data)
    }
    getData()
    //eslint-disable-next-line
  }, [])

  function logout(){
    setUser(null)
    navigate("/signin")
  }

  return (
    <Container>
      <Header>
        <h2>Olá, {user?.name}</h2>
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
                      <Transaction>
                        <Desc>
                          <span>{transaction.date}</span>
                          <p>{transaction.desc}</p>
                        </Desc>
                        <Value type={transaction.type}>
                          {transaction.value}
                        </Value>
                      </Transaction>
                    )  
                  })}
              </Transactions>
              <Balance><span>SALDO</span>{100.52}</Balance>
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