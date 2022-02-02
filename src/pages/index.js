import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Home from "./Home";
import { Route, Routes } from "react-router";

export default function Pages() {
    return(
        <Routes>
            <Route path="/signin" element={<SignIn/>}></Route>
            <Route path="/signup" element={<SignUp/>}></Route>
            <Route path="/" element={<Home/>}></Route>
        </Routes>
    )
}
