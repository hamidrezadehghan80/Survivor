import React from "react";
import {Grid} from "@mui/material";

const Trending_post = ({publisher, date, title, tag, img_src}) => {
    return(
        <Grid container flexDirection={"row"} columnGap={"1rem"} padding={".5rem 1rem"} flexWrap={"nowrap"} borderBottom={"1px solid var(--divider_dark)"}>
            <Grid item xs={9} container flexDirection={"column"} justifyContent={"space-between"} rowGap={"8px"}>
                <Grid item className={"p_gray"}>
                    <span>{publisher} - {date}</span>
                </Grid>
                <Grid item className={"p_blue"}>
                    {title}
                </Grid>
                <Grid item container flexWrap={"nowrap"} flexDirection={"row"} columnGap={"3px"}>
                    <Grid item>
                        <span className={"p_gray"}>TrendingWith</span>
                    </Grid>
                    <Grid item>
                        <span className={"p_orange"}>{tag}</span>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={3} justifyContent={"end"} container>
                <img src={img_src} alt={"trending post image"} style={{
                    width : "100%",
                    height : "75px",
                    objectFit : "cover",
                    borderRadius : "1rem"
                }}/>
            </Grid>
        </Grid>
    )
}

export default Trending_post