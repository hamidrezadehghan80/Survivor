import React from "react";
import {Grid} from "@mui/material";
import Header from "../../Layout/Header/Header";

const Not_found = (props) => {
    return(
        <Grid container flexDirection={"column"} rowGap={"2rem"}>
            <Grid item>
                <Header title={"Not Found"}/>
            </Grid>
            <Grid item container justifyContent={"center"} alignItems={"center"}>
                <Grid item>
                    <p style={{color : "#010752", fontSize : "30px"}}>
                        Page Not Found :\
                    </p>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Not_found