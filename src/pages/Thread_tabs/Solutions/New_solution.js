import React, {useState} from "react";
import {Grid} from "@mui/material";
import {Who_to_follow_avatar} from "../../../Constants/images";
import ImageIcon from '@mui/icons-material/Image';
import GifBoxIcon from '@mui/icons-material/GifBox';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import "../../Home/Newpost.css"

const New_solution = (props) => {

    const [solution_text, setsolution_text] = useState("");

    return(
        <Grid container flexDirection={"column"} className={"section"} padding={"1rem"} rowGap={"1rem"}>
            <Grid item container flexDirection={"row"} alignItems={"center"} columnGap={"1rem"}>
                <Grid item>
                    <img src={Who_to_follow_avatar} alt={"profile avatar"} style={{
                        width : "49px",
                        height : "49px"
                    }}/>
                </Grid>
                <Grid item>
                    <textarea
                        value={solution_text}
                        onChange={(e) => setsolution_text(e.target.value)}
                        placeholder={"Add your solution here..."}
                        className={"app__home-newpost-input"}
                    />
                </Grid>
            </Grid>
            <Grid item container flexDirection={"row"} justifyContent={"space-between"} alignItems={"end"} flexWrap={"nowrap"}>
                <Grid item xs={4} container flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"} marginLeft={"3rem"}>
                    <Grid item>
                        <ImageIcon fontSize={"20px"} className={"app__home-newpost-icon"}/>
                    </Grid>
                    <Grid item>
                        <GifBoxIcon fontSize={"20px"} className={"app__home-newpost-icon"}/>
                    </Grid>
                    <Grid item>
                        <SentimentSatisfiedAltIcon fontSize={"20px"} className={"app__home-newpost-icon"}/>
                    </Grid>
                </Grid>
                <Grid item xs={8} flexGrow={1} justifyContent={"end"} container>
                    <button className={"app__home-newpost-postbtn"}>
                        Post
                    </button>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default New_solution