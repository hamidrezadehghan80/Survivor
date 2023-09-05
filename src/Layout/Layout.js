import React, {useEffect, useState} from "react";
import Rightsidebar from "./rightsidebar/Rightsidebar";
import Leftsidebar from "./leftsidebar/Leftsidebar";
import "./layout_styles.css"
import {Grid} from "@mui/material";
import {Route, Routes, useLocation} from "react-router-dom";
import Header from "./Header/Header";
import Home from "../pages/Home/Home";
import Explore from "../pages/Explore/Explore";
import FAQ from "../pages/Faq/Faq";
import Report from "../pages/Report_issue/Report";
import Thread from "../pages/Thread_tabs/Thread";
import Profile from "../pages/Profile/Profile";
import Following_list from "../pages/Following/Following";
import Followers_list from "../pages/Followers/Followers";
import User_Profile from "../pages/Other_users/User_profile";
import Not_found from "../pages/Not_found/Not_found";
import Users_Search from "../pages/Other_users/Other_users_search";
import Profile_page from "../pages/Profile/Profile_page";
import "../index.css";

const Layout = () => {

    const [Page, setPage] = useState("");

    let {pathname} = useLocation();
    pathname = pathname.toLowerCase().substring(1);
    let index = pathname.indexOf('/');
    index = index === -1 ? pathname.length : index;
    pathname = pathname.substring(0, index);


    useEffect(() => {
        if(pathname === ""){
            setPage("Home");
        }else if (pathname === "thread"){
            setPage("Thread");
        }else if (pathname === "explore"){
            setPage("Explore");
        }else if (pathname === "faq"){
            setPage("FAQ");
        }else if (pathname === "report"){
            setPage("Report");
        }else if (pathname === "profile"){
            setPage("Profile");
        }else if (pathname === "search"){
            setPage("Users_search");
        }else if (pathname === "user"){
            setPage("Users_profile");
        }else if (pathname === "following"){
            setPage("Following_list");
        }else if (pathname === "followers"){
            setPage("Followers_list");
        }else {
            setPage("Not_found");
        }
    },[pathname]);


    return(
        <Grid container flexDirection={"row"} className={"app__root"} columnGap={"2rem"}  flexWrap={"nowrap"}>
            <Grid item max-width={"22%"} paddingTop={"5rem"}>
                <Leftsidebar page={Page}/>
            </Grid>
            <Grid item width={"50%"}>
                <Grid item>
                    <Routes>
                        <Route index element={<Home/>}/>
                        <Route path={"Thread/:Post_Id"} element={<Thread/>}/>
                        <Route path={"Explore"} element={<Explore/>}/>
                        <Route path={"FAQ"} element={<FAQ/>}/>
                        <Route path={"Report"} element={<Report/>}/>
                        <Route path={"Profile"} element={<Profile_page/>}/>
                        <Route path={"Search"} element={<Users_Search/>}/>
                        <Route path={"User/:User_name"} element={<User_Profile/>}/>
                        <Route path={"Profile/Following/:User_name"} element={<Following_list/>}/>
                        <Route path={"Profile/Followers/:User_name"} element={<Followers_list/>}/>
                        <Route path={"*"} element={<Not_found/>}/>
                    </Routes>
                </Grid>
            </Grid>
            <Grid item width={"28%"} paddingTop={"5rem"}>
                <Rightsidebar page={Page}/>
            </Grid>
        </Grid>

    );
}

export default Layout