import { BrowserRouter} from "react-router-dom"
import { GlobalStyle } from "./style/reset"
import Pages from "./pages"

export default function App(){
    return(
        <BrowserRouter>
            <GlobalStyle/>
            <Pages/>
        </BrowserRouter>
    )
} 