import React, {useEffect, useState} from "react";
import {Grid} from "@mui/material";
import Newpost from "./Newpost";
import Post from "./Post";
import Header from "../../Layout/Header/Header";
import {useLocation} from "react-router-dom";
import {post_image, profile_avatar} from "../../Constants/images";
import {set_Post_list, Use_Post_Dispatch, Use_Post_State} from "../../Context/Post_Context";
import {toast} from "react-toastify";

const Home = (props) => {

    const {Post_list} = Use_Post_State();
    const dispatch = Use_Post_Dispatch();

    const update_posts = () => {
        // Get_all_posts((ok_flag, result)=>{
        //     if (ok_flag){
        //         // console.log(result);
        //         set_Post_list(dispatch,result);
        //     }else{
        //         toast.error(result.message);
        //     }
        // })
        set_Post_list(dispatch,[
            {
                post_id : "123",
                name : "Devon Lane",
                username : "@marcelosalomao",
                date : "23s",
                user_img : profile_avatar,
                post_text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                post_img : post_image,
                like_num : "6.2K",
                comment_num : "61"
            },
            {
                post_id : "124",
                name : "Devon Lane",
                username : "@marcelosalomao",
                date : "23s",
                user_img : profile_avatar,
                post_text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                post_img : post_image,
                like_num : "6.2K",
                comment_num : "61"
            },
            {
                post_id : "125",
                name : "Devon Lane",
                username : "@marcelosalomao",
                date : "23s",
                user_img : profile_avatar,
                post_text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                post_img : post_image,
                like_num : "6.2K",
                comment_num : "61"
            },
            {
                post_id : "126",
                name : "Devon Lane",
                username : "@marcelosalomao",
                date : "23s",
                user_img : profile_avatar,
                post_text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                post_img : post_image,
                like_num : "6.2K",
                comment_num : "61"
            },
            {
                post_id : "127",
                name : "Devon Lane",
                username : "@marcelosalomao",
                date : "23s",
                user_img : profile_avatar,
                post_text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                post_img : post_image,
                like_num : "6.2K",
                comment_num : "61"
            },
        ]);


    }

    useEffect(() => {
        update_posts();
    }, []);


    return(
        <Grid container flexDirection={"column"} rowGap={"2rem"}>
            <Grid item>
                <Header title={"Home"}/>
            </Grid>
            <Grid item container flexDirection={"column"} rowGap={"1rem"} flexWrap={"nowrap"}>
                <Grid item>
                    <Newpost place_holder={"What’s happening?"}/>
                </Grid>
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
        </Grid>
    )
}

export default Home