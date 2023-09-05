import React from "react";
import {Routes, Route} from "react-router-dom";
import Login from "./Login";
import Sign_Up from "./Sign up";
import Authentication from "./Authentication";
import Forgot_password from "./Forgot_password";
import Very_pass_forgot from "./very_pass_forgot";
import New_password from "./New_password";
import Not_found from "../../pages/Not_found/Not_found";

const Auth_Routes = (props) => {
    return(
        <Routes>
            <Route index element={<Login/>}/>
            <Route path={"/signup"} element={<Sign_Up/>}/>
            <Route path={"/signup/verify"} element={<Authentication/>}/>
            <Route path={"/forgot_password"} element={<Forgot_password/>}/>
            <Route path={"/forgot_password/verify"} element={<Very_pass_forgot/>}/>
            <Route path={"/forgot_password/reset_password"} element={<New_password/>}/>
            <Route path={"*"} element={<Not_found/>}/>
        </Routes>
    )
}

export default Auth_Routes