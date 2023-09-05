import React from "react";
import Layout from "./Layout/Layout";
import Login from "./Auth/Login/Login";
import Sign_Up from "./Auth/Login/Sign up";
import Authentication from "./Auth/Login/Authentication";
import Forgot_password from "./Auth/Login/Forgot_password";
import Very_pass_forgot from "./Auth/Login/very_pass_forgot";
import New_password from "./Auth/Login/New_password";
import {ToastContainer} from "react-toastify";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import {profile_avatar, profile_cover} from "./Constants/images";
import {Post_provider} from "./Context/Post_Context";
import Auth_Routes from "./Auth/Login/Auth_Routes";

const App = () => {

    localStorage.setItem("name", "Harper Thompson");
    localStorage.setItem("username", "@HarperTh");
    localStorage.setItem("Bio", "Learning, growing, healing. 🌿 Champion of self-love and mental wellness, on a personal journey towards peace and balance. #MentalHealthAwareness #SelfCareJourney");
    localStorage.setItem("image", profile_avatar);
    localStorage.setItem("cover_image", profile_cover);
    localStorage.setItem("Authentication", "x-auth-token");
    localStorage.removeItem("Authentication");

    return(
        <Post_provider>
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path={"/login/*"} element={<Public_rout>
                            <Auth_Routes/>
                        </Public_rout>}/>
                        <Route exact path={"/*"} element={<Private_rout>
                            <Layout/>
                        </Private_rout>}/>
                    </Routes>
                </BrowserRouter>
                <ToastContainer theme={"colored"}/>
            </div>
        </Post_provider>
    )
}

export default App

const is_login = () => !!localStorage.getItem("Authentication");
const is_login_flag = is_login();

const Public_rout = ({children}) => {
    if (is_login_flag){
        return <Navigate to={"/"}/>;
    }
    return children;
}

const Private_rout = ({children}) => {
    if (!is_login_flag){
        return <Navigate to={"/login"}/>
    }
    return children
}
