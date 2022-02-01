import { BrowserRouter, Routes, Route } from "react-router-dom"
import { GlobalStyle } from "./style/reset"
import SignUp from "./pages/SignUp"

export default function App(){
    return(
        <BrowserRouter>
            <GlobalStyle/>
            <Routes>
                <Route path="/" element={""}></Route>
                <Route path="/signup" element={<SignUp/>}></Route>
            </Routes>
        </BrowserRouter>
    )
} 