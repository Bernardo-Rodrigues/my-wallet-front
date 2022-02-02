import { AddTrasactions, Button, Header, NoTransactions, Registers } from "./styles";
import { ExitOutline, AddCircleOutline, RemoveCircleOutline } from 'react-ionicons'
import { useEffect, useState } from "react";
import useApi from "../../hooks/useApi";
import { useNavigate } from "react-router";
import Container from "../../components/Container";

export default function Home() {
  const user = JSON.parse(localStorage.getItem("User"))
  const [ userTransactions, setUserTransactions ] = useState([]) 
  const api = useApi()
  const navigate = useNavigate()

  useEffect( () => {
    async function getData(){
      const header = { headers: { Authorization: `Bearer ${user.token}` }}
      const res = await api.transactions.getAllTransactions(header)
      
      setUserTransactions(res.data)
    }
    getData()
  }, [])

  function logout(){
    localStorage.removeItem("User")
    navigate("/signin")
  }

  return (
    <Container>
      <Header>
        <h2>Olá, {user.name}</h2>
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
          ? userTransactions.map( transaction => {
              return <p>transaction</p>
            })
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