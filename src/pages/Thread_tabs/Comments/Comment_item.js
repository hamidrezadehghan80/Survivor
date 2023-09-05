import React from "react";
import "../../Home/Post.css"
import {Grid} from "@mui/material";
import {Who_to_follow_avatar} from "../../../Constants/images";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ReportIcon from "@mui/icons-material/Report";
import {Link} from "react-router-dom";

const Comment = ({name, user_name, date, user_img, text, like_num}) => {
    return(
        <Grid
            container
            flexDirection={"row"}
            alignItems={"start"}
            justifyContent={"space-between"}
            padding={"1rem"}
            className={"section"}
            columnGap={"1rem"}
            flexWrap={"nowrap"}
        >
            <Grid item>
                <Link to={`/User/${user_name}`}>
                    <img src={user_img} alt={"post_avatar"} style={{
                        width : "49px",
                        height : "49px",
                        borderRadius : "50%",
                    }}/>
                </Link>
            </Grid>
            <Grid item container flexDirection={"column"} justifyContent={"start"} rowGap={"7px"}>
                <Grid item>
                    <Link to={`/User/${user_name}`}>
                        <span className={"p_blue"}>{name} </span>
                    </Link>
                    <Link to={`/User/${user_name}`}>
                        <span className={"p_gray"}>{user_name}</span>
                    </Link>
                    <span className={"p_gray"}> - {date}</span>
                </Grid>
                <Grid item>
                    <p className={"p_blue"}>
                        {text}
                    </p>
                </Grid>
                <Grid
                    item
                    container
                    flexDirection={"row"}
                    justifyContent={"end"}
                    alignItems={"center"}
                >
                    <Grid item className={"app__home_post_icons"}>
                        <FavoriteBorderOutlinedIcon/>
                        <span className={"p_gray"}>{like_num}</span>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <ReportIcon className={"app__home-newpost-icon"}/>
            </Grid>
        </Grid>
    )
}

export default Comment