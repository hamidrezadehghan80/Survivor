import React, {useState} from "react";
import {Grid} from "@mui/material";
import {profile_avatar, profile_cover} from "../../Constants/images";
import "./Edit_profile.css";
import "./Profile.css";
import "../../index.css";
import Header from "../../Layout/Header/Header";

const Edit_profile = ({set_edit}) => {
    const [name_text, setName_text] = useState("");
    const [Bio_text, setBio_text] = useState("");

    const handle_done_click = () => {
        set_edit(false);
    }

    return(
        <Grid container flexDirection={"column"} rowGap={"2rem"}>
            <Grid item>
                <Header title={"Profile"}/>
            </Grid>
            <Grid item container flexDirection={"column"} className={"section"}>
                <Grid item width={"100%"}>
                    <img src={profile_cover} alt={"profile cover"} className={"app__profile_cover_image"}/>
                </Grid>
                <Grid item container flexDirection={"column"} padding={"1rem"} rowGap={"10px"}>
                    <Grid item container width={"100%"} flexDirection={"row"} justifyContent={"end"} position={"relative"} flexGrow={"1"} columnGap={"1rem"}>
                        <Grid item className={"app__profile_avatar_img"}>
                            <img src={profile_avatar} alt={"profile avatar"}/>
                        </Grid>
                        <Grid item>
                            <button className={"app__profile_editbtn"}>
                                Edit Avatar
                            </button>
                        </Grid>
                        <Grid item>
                            <button className={"app__profile_editbtn"}>
                                Edit Cover
                            </button>
                        </Grid>
                        <Grid item>
                            <button className={"app__profile_editbtn"} onClick={() => handle_done_click()}>
                                Done
                            </button>
                        </Grid>
                    </Grid>
                    <Grid item container flexDirection={"column"} rowGap={"5px"}>
                        <Grid item>
                            <p className={"app_editprofile_label"}>Name:</p>
                        </Grid>
                        <Grid item>
                            <input className={"app_editprofile_input"} vlaue={name_text} onChange={(e) => setName_text(e.target.value)}/>
                        </Grid>
                    </Grid>
                    <Grid item container flexDirection={"column"} rowGap={"5px"}>
                        <Grid item>
                            <p className={"app_editprofile_label"}>Bio:</p>
                        </Grid>
                        <Grid item>
                            <input className={"app_editprofile_input"} vlaue={Bio_text} onChange={(e) => setBio_text(e.target.value)}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Edit_profile