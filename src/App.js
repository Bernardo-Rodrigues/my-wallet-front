import { BrowserRouter} from "react-router-dom"
import { GlobalStyle } from "./style/reset"
import Pages from "./pages"
import GlobalContext from "./context"

export default function App(){
    return(
        <BrowserRouter>
            <GlobalStyle/>
            <GlobalContext>
                <Pages/>
            </GlobalContext>
        </BrowserRouter>
    )
} 