import React, {useState} from "react";
import {Grid} from "@mui/material";
import "../Profile/Profile.css";
import Box from "@mui/material/Box";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import Posts_tab from "./Posts_tab";
import Summary_tab from "./Summary_tab";
import Header from "../../Layout/Header/Header";
import {Link} from "react-router-dom";


const Profile = ({set_edit}) => {

    const [value, setValue] = React.useState('1');

    const name = localStorage.getItem("name");
    const user_name = localStorage.getItem("username");
    const bio = localStorage.getItem("Bio");
    const user_img = localStorage.getItem("image");
    const cover_img = localStorage.getItem("cover_image");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handle_edit_click = () => {
        set_edit(true);
    }

    return(
        <Grid container flexDirection={"column"} rowGap={"2rem"}>
            <Grid item>
                <Header title={"Profile"}/>
            </Grid>
            <Grid item container flexDirection={"column"} rowGap={"1rem"}>
                <Grid item container flexDirection={"column"} className={"section"}>
                    <Grid item width={"100%"}>
                        <img src={cover_img} alt={"profile cover"} className={"app__profile_cover_image"}/>
                    </Grid>
                    <Grid item container flexDirection={"column"} padding={"1rem"} rowGap={"10px"}>
                        <Grid item container width={"100%"} flexDirection={"row"} justifyContent={"end"} position={"relative"} flexGrow={"1"}>
                            <Grid item className={"app__profile_avatar_img"}>
                                <img src={user_img} alt={"profile avatar"}/>
                            </Grid>
                            <Grid item>
                                <button className={"app__profile_editbtn"} onClick={() => handle_edit_click()}>
                                    Edit Profile
                                </button>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <p className={"title_text"}>
                                {name}
                            </p>
                        </Grid>
                        <Grid item>
                            <p className={"p_gray"}>
                                {user_name}
                            </p>
                        </Grid>
                        <Grid item>
                            <p className={"app__profile_bio_text"}>
                                {bio}
                            </p>
                        </Grid>
                        <Grid item container flexDirection={"row"} justifyContent={"start"} alignItems={"center"}>
                            <Grid item marginRight={"2rem"}>
                                <Link to={`Following/${user_name}`}>
                                    <span className={"p_blue"}>
                                        569
                                    </span>
                                    <span className={"app__profile_follow"}>
                                        Following
                                    </span>
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link to={`Followers/${user_name}`}>
                                    <span className={"p_blue"}>
                                        569
                                    </span>
                                    <span className={"app__profile_follow"}>
                                        Followers
                                    </span>
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item container justifyContent={"center"}>
                    <Box sx={{ width: '100%', typography: 'body1' }}>
                        <TabContext value={value}>
                            <Box marginBottom={"1rem"}>
                                <TabList indicatorColor={"none"} onChange={handleChange} aria-label="lab API tabs example" style={{
                                    borderRadius : "1rem",
                                }}>
                                    <Tab className={value === "1" ? "app__thread_tab_btn-active" : "app__thread_tab_btn"} label="Posts" value="1" />
                                    <Tab className={value === "2" ? "app__thread_tab_btn-active" : "app__thread_tab_btn"} label="Summary" value="2" />
                                </TabList>
                            </Box>
                            <TabPanel value="1" sx={{padding : "0"}}><Posts_tab/></TabPanel>
                            <TabPanel value="2" sx={{padding : "0"}}><Summary_tab/></TabPanel>
                        </TabContext>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Profile