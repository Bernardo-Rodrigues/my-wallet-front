import { BrowserRouter, Routes, Route } from "react-router-dom"
import { GlobalStyle } from "./style/reset"
import { SignUp, SignIn, Home } from "./pages"

export default function App(){
    return(
        <BrowserRouter>
            <GlobalStyle/>
            <Routes>
                <Route path="/signin" element={<SignIn/>}></Route>
                <Route path="/signup" element={<SignUp/>}></Route>
                <Route path="/" element={<Home/>}></Route>
            </Routes>
        </BrowserRouter>
    )
} 