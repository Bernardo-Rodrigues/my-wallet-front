import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { UserContext } from "../../context/user";
import useApi from "../../hooks/useApi";
import Container from "../../components/Container";
import { Header, Registers, AddTransactions } from "./pageComponents";

export default function Home() {
  const api = useApi()
  const navigate = useNavigate()
  const [ userTransactions, setUserTransactions ] = useState([]) 
  const [ balance, setBalance ] = useState(0) 
  const [ reload, setReload ] = useState(false)
  const { user, setUser } = useContext(UserContext)
  
  useEffect( () => {
    if(!user) navigate("/signin")
    async function getData(){
      const headers = { headers: { Authorization: `Bearer ${user?.token}` }}
      try {
        const res = await api.transactions.getAllTransactions(headers)
        
        setUserTransactions(res.data.userTransactions)
        setBalance(res.data.balance)
      } catch (error) {
        console.log(error.response)
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

  return (
    <Container>
      <Header/>

      <Registers
        userTransactions={userTransactions}
        balance={balance}
        setReload={setReload}
      ></Registers>

      <AddTransactions/>
    </Container>
  );
}