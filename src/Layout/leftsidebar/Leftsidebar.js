import React, {useState} from "react";
import "./leftsidebar.css"
import {Grid} from "@mui/material";
import Left_Navbar from "./Left_navbar";
import Quote from "./Quote";

const Leftsidebar = ({page}) => {

    return(
        <Grid container flexDirection={"column"} rowGap={"1.5rem"}>
            <Grid item>
                <Left_Navbar page={page}/>
            </Grid>
            <Grid item className={"section"}>
                <Quote/>
            </Grid>
        </Grid>
    )
}

export default Leftsidebar