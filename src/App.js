import { BrowserRouter, Routes, Route } from "react-router-dom"
import { GlobalStyle } from "./style/reset"

export default function App(){
    return(
        <BrowserRouter>
            <GlobalStyle/>
            <Routes>
                <Route path="/" element={"aaaa"}></Route>
            </Routes>
        </BrowserRouter>
    )
} 