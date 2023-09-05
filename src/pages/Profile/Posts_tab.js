import React from "react";
import {Grid} from "@mui/material";
import Post from "../Home/Post";
import {Use_Post_State} from "../../Context/Post_Context";

const Posts_tab = (props) => {

    const {Post_list} = Use_Post_State();

    return(
        <Grid container flexDirection={"column"} rowGap={"1rem"}>
            {
                Post_list?.map(({post_id, name, username, date, user_img, post_text, post_img, like_num, comment_num}, index) =>
                    <Grid item key={index}>
                        <Post
                            post_id={post_id}
                            name={name}
                            username={username}
                            date={date}
                            user_img={user_img}
                            post_text={post_text}
                            post_img={post_img}
                            like_num={like_num}
                            comment_num={comment_num}
                        />
                    </Grid>
                )
            }
        </Grid>
    )
}

export default Posts_tab