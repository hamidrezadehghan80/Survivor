import React, {useState} from "react";
import "./rightsidebar.css"
import {Grid} from "@mui/material";
import {Search} from "@mui/icons-material";
import Trending_list from "./Trending_list";
import Who_to_follow from "./Who_to_follow";

const Rightsidebar = ({page}) => {
    const [Search_text, setSearch_text] = useState("");

    return(
        <Grid container flexDirection={"column"} rowGap={"1.5rem"}>
            {
                page !== "Explore" &&
                <>
                    <Grid item container flexDirection={"row"} alignItems={"center"} className={"app__rightside_searchbox"} flexWrap={"nowrap"}>
                        <Search/>
                        <input placeholder={"search..."} value={Search_text} onChange={(e) => setSearch_text(e.target.value)}/>
                    </Grid>
                    <Grid item>
                        <Trending_list/>
                    </Grid>
                </>
            }
            <Grid item>
                <Who_to_follow/>
            </Grid>
        </Grid>
    )
}

export default Rightsidebar