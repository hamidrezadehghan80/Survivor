import React, {useState} from "react";
import {Grid} from "@mui/material";
import {profile_avatar, profile_cover} from "../../Constants/images";
import Post from "../Home/Post";
import Header from "../../Layout/Header/Header";
import {useParams} from "react-router-dom";
import {Use_Post_Dispatch, Use_Post_State} from "../../Context/Post_Context";

const User_Profile = (props) => {

    // const [Following, setFollowing] = useState(true);
    // const [Blocked, setBlocked] = useState(false);

    const {User_name} = useParams();

    const user_data = {
        name : "Harper Thompson",
        user_name : User_name,
        cover_img : profile_cover,
        profile_img : profile_avatar,
        bio : "Learning, growing, healing. 🌿 Champion of self-love and mental wellness, on a personal journey towards peace and balance. #MentalHealthAwareness #SelfCareJourney0",
        followed : true,
        blocked : false
    }

    const {Post_list} = Use_Post_State();
    const dispatch = Use_Post_Dispatch();


    return(
        <Grid container flexDirection={"column"} rowGap={"2rem"}>
            <Grid item>
                <Header title={"Profile"}/>
            </Grid>
            <Grid item container flexDirection={"column"} rowGap={"1rem"}>
                <Grid item container flexDirection={"column"} className={"section"}>
                    <Grid item width={"100%"}>
                        <img src={user_data.cover_img} alt={"profile cover"} className={"app__profile_cover_image"}/>
                    </Grid>
                    <Grid item container flexDirection={"column"} padding={"1rem"} rowGap={"10px"}>
                        <Grid item container width={"100%"} flexDirection={"row"} justifyContent={"end"} position={"relative"} flexGrow={"1"} columnGap={"1rem"}>
                            <Grid item className={"app__profile_avatar_img"}>
                                <img src={user_data.profile_img} alt={"profile avatar"}/>
                            </Grid>
                            {
                                user_data.blocked ?
                                    <Grid item>
                                        <button className={"app__profile_editbtn"}>
                                            Unblock
                                        </button>
                                    </Grid>
                                    :
                                    <>
                                        <Grid item>
                                            <button className={"app__profile_editbtn"}>
                                                {
                                                    user_data.followed ? "Unfollow" : "Follow"
                                                }
                                            </button>
                                        </Grid>
                                        <Grid item>
                                            <button className={"app__profile_editbtn"}>
                                                Report
                                            </button>
                                        </Grid>
                                        <Grid item>
                                            <button className={"app__profile_editbtn"}>
                                                Block
                                            </button>
                                        </Grid>
                                    </>
                            }
                        </Grid>
                        <Grid item>
                            <p className={"title_text"}>
                                {user_data.name}
                            </p>
                        </Grid>
                        <Grid item>
                            <p className={"p_gray"}>
                                {user_data.user_name}
                            </p>
                        </Grid>
                        <Grid item>
                            <p className={"app__profile_bio_text"}>
                                {user_data.bio}
                            </p>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid
                    item
                    container
                    flexDirection={"column"}
                    rowGap={"1rem"}
                    style={user_data.blocked ? {filter : "blur(10px)"} : {}}
                >
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
        </Grid>

    )
}

export default User_Profile