import React, {useState} from "react";
import {Grid} from "@mui/material";
import {Search} from "@mui/icons-material";
import Trending_list from "../../Layout/rightsidebar/Trending_list";
import "./Explore.css"
import Header from "../../Layout/Header/Header";

const Explore = (props) => {

    const [Search_text, setSearch_text] = useState("");

    return(
        <Grid container flexDirection={"column"} rowGap={"2rem"}>
            <Grid item>
                <Header title={"Explore"} arrow_f={false}/>
            </Grid>
            <Grid item container flexDirection={"column"} rowGap={"1rem"}>
                <Grid item container flexDirection={"row"} alignItems={"center"} className={"app__explore_search"} flexWrap={"nowrap"}>
                    <Search/>
                    <input placeholder={"search..."} value={Search_text} onChange={(e) => setSearch_text(e.target.value)}/>
                </Grid>
                <Grid item>
                    <Trending_list/>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Explore