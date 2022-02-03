import { Route, Routes } from "react-router";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Home from "./Home";
import NewTransaction from "./NewTransaction";

export default function Pages() {
    return(
        <Routes>
            <Route path="/signin" element={<SignIn/>}></Route>
            <Route path="/signup" element={<SignUp/>}></Route>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/entry" element={<NewTransaction/>}></Route>
            <Route path="/output" element={<NewTransaction/>}></Route>
            <Route path="/edit" element={<NewTransaction/>}></Route>
        </Routes>
    )
}
