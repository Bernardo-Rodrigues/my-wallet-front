import { BrowserRouter} from "react-router-dom"
import { GlobalStyle } from "./style/reset"
import Pages from "./pages"
import UserContextProvider from "./context/user"

export default function App(){
    return(
        <BrowserRouter>
            <GlobalStyle/>
            <UserContextProvider>
                <Pages/>
            </UserContextProvider>
        </BrowserRouter>
    )
} 