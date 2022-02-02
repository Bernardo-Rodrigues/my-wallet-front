import { createContext } from "react"
import useLocalStorage from "../hooks/useLocalStorage";

export const UserContext = createContext();

export default function UserContextProvider({children}){
    const [user, setUser] = useLocalStorage("User", null);

    return <UserContext.Provider value={{user, setUser}}>{children}</UserContext.Provider>
}