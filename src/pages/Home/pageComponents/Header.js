import { useContext } from "react"
import { ExitOutline } from "react-ionicons"
import { useNavigate } from "react-router"
import { UserContext } from "../../../context/user"
import { HeaderElement } from "../styles"

export default function Header(){
    const { user, setUser } = useContext(UserContext)
    const navigate = useNavigate()

    function logout(){
        setUser(null)
        navigate("/signin")
      }

    return(
        <HeaderElement>
            <h2>Olá, {user?.username}</h2>
            <ExitOutline
              color={'#FFF'}
              height="32px"
              width="32px"
              onClick={logout}
              style={{cursor:"pointer"}}
            />
        </HeaderElement>
    )    
}
