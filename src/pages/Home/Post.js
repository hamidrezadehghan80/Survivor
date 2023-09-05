import React from "react";
import {Grid} from "@mui/material";
import {post_image, profile_cover, Who_to_follow_avatar} from "../../Constants/images";
import ReportIcon from '@mui/icons-material/Report';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import "./Post.css";
import {Link} from "react-router-dom";

const Post = ({post_id, name, username, date, user_img, post_text, post_img, like_num, comment_num}) => {
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
                <Link to={`/User/${username}`}>
                    <img
                        src={user_img}
                        alt={"post_avatar"}
                        style={{
                            width : "49px",
                            height : "49px",
                            borderRadius : "50%"
                        }}
                    />
                </Link>
            </Grid>
            <Grid item container flexDirection={"column"} justifyContent={"start"} rowGap={"7px"}>
                <Grid item>
                    <Link to={`/User/${username}`}>
                        <span className={"p_blue"}>{name} </span>
                    </Link>
                    <Link to={`/User/${username}`}>
                        <span className={"p_gray"}>{username}</span>
                    </Link>
                    <span className={"p_gray"}> - {date}</span>
                </Grid>
                <Grid item container flexDirection={"row"} alignItems={"center"}>
                    <ArrowForwardIosOutlinedIcon
                        fontSize={"8px"}
                        className={"p_orange"}
                    />
                    <p className={"p_gray"} style={{
                        fontWeight : "bold",
                        fontSize : "16px"
                    }}>NewTitle</p>
                </Grid>
                <Grid item>
                    <p className={"p_gray"}>
                        From: ParentTitle
                    </p>
                </Grid>
                <Grid item>
                    <p className={"p_blue"}>
                        {post_text}
                    </p>
                </Grid>
                <Grid item>
                    <img
                        src={post_img}
                        alt={"post_image"}
                        style={{
                            width : "467px",
                            height : "257px"
                        }}
                    />
                </Grid>
                <Grid
                    item
                    container
                    flexDirection={"row"}
                    justifyContent={"space-evenly"}
                    alignItems={"center"}
                >
                    <Grid item className={"app__home_post_icons"}>
                        <ModeCommentOutlinedIcon/>
                        <span className={"p_gray"}>{comment_num}</span>
                    </Grid>
                    <Grid item className={"app__home_post_icons"}>
                        <FavoriteBorderOutlinedIcon/>
                        <span className={"p_gray"}>{like_num}</span>
                    </Grid>
                </Grid>
                <Grid item marginLeft={"2rem"}>
                    <Link to={`/Thread/${post_id}`}>
                        <button className={"p_orange app__home_post_btn"}>
                            Show this thread
                        </button>
                    </Link>
                </Grid>
            </Grid>
            <Grid item>
                <ReportIcon className={"app__home-newpost-icon"}/>
            </Grid>
        </Grid>
    )
}

export default Post