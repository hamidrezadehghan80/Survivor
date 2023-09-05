import React from "react";
import {Grid} from "@mui/material";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import "./Summary_tab.css"

const Summary_tab = (props) => {

    const struggle_list = [
        {
            name : "struggle1"
        },
        {
            name : "struggle2"
        },
        {
            name : "struggle3"
        },
    ]

    return(
        <Grid container flexDirection={"column"} className={"section"} padding={"1rem"} rowGap={"1rem"} minHeight={"400px"}>
            {
                struggle_list?.map(({name}, index) =>
                    <Grid item container flexDirection={"row"} alignItems={"start"} borderBottom={"1px solid #F09D50"} key={index} padding={"5px"}>
                        <Grid item>
                            <ArrowCircleRightIcon className={"app__profile_summary_icon"}/>
                        </Grid>
                        <Grid item marginLeft={"5px"}>
                            <p className={"p_blue"}>
                                {name}
                            </p>
                        </Grid>
                    </Grid>
                )
            }
        </Grid>
    )
}

export default Summary_tab