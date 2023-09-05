import React, {useState} from "react";
import {logo} from "../../Constants/images";
import {HelpOutline, Home, PermIdentity, ReportGmailerrorred, Tag} from "@mui/icons-material";
import "./left_navbar.css";
import {Link, useLocation} from "react-router-dom";


const Left_Navbar = ({page}) => {

    const home_list = ["Home", "Thread"];
    const explore_list = ["Explore", "Users_search", "Users_profile"];
    const profile_list = ["Profile", "Following_list", "Followers_list"];

    const handle_logout = (e) => {
        localStorage.clear();
        window.location.reload();
    };

    return(
        <div className={"section"}>
            <Link to={"/"}>
                <img
                    src={logo}
                    alt={"leftside logo"}
                    className={"hover_cursor"}
                    style={{
                    width : "82px",
                    height : "84.22px",
                    marginLeft : "1rem",
                    marginTop : "1rem"
                }}/>
            </Link>
            <div>
                <Link to={"/"} className={"app__leftside_navbar_item title_text"} style={home_list.includes(page) ? {color : "#F09D50"} : {}}>
                    <Home/>
                    <p>Home</p>
                </Link>
            </div>
            <div>
                <Link to={"/Explore"} className={"app__leftside_navbar_item title_text"} style={explore_list.includes(page) ? {color : "#F09D50"} : {}}>
                    <Tag/>
                    <p>Explore</p>
                </Link>
            </div>
            <div>
                <Link to={"/Profile"} className={"app__leftside_navbar_item title_text"} style={profile_list.includes(page) ? {color : "#F09D50"} : {}}>
                    <PermIdentity/>
                    <p>Profile</p>
                </Link>
            </div>
            <div>
                <Link to={"/FAQ"} className={"app__leftside_navbar_item title_text"} style={page === "FAQ" ? {color : "#F09D50"} : {}}>
                    <HelpOutline/>
                    <p>FAQ</p>
                </Link>
            </div>
            <div>
                <Link to={"/Report"} className={"app__leftside_navbar_item title_text"} style={page === "Report" ? {color : "#F09D50"} : {}}>
                    <ReportGmailerrorred/>
                    <p>Report Technical Issues</p>
                </Link>
            </div>
            <a className={"app__leftside_navbar_signout"} onClick={handle_logout}>Sign Out</a>
        </div>
    )
}

export default Left_Navbar