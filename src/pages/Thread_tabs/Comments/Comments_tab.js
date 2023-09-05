import React, {useState} from "react";
import "./Comments_tab.css"
import {Grid} from "@mui/material";
import New_comment from "./New_comment";
import Comment from "./Comment_item";
import Newpost from "../../Home/Newpost";
import {Who_to_follow_avatar} from "../../../Constants/images";

const Comments_tab = (props) => {

    const [Comment_list, setComment_list] = useState([
        {
            name : "Sou Hance",
            user_name: "Sou Hance",
            date : "23s",
            user_img : Who_to_follow_avatar,
            comment_text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            like_num : 12

        },
        {
            name : "Sou Hance",
            user_name: "Sou Hance",
            date : "23s",
            user_img : Who_to_follow_avatar,
            comment_text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            like_num : 12

        },
        {
            name : "Sou Hance",
            user_name: "Sou Hance",
            date : "23s",
            user_img : Who_to_follow_avatar,
            comment_text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            like_num : 12

        },
        {
            name : "Sou Hance",
            user_name: "Sou Hance",
            date : "23s",
            user_img : Who_to_follow_avatar,
            comment_text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            like_num : 12

        },
        {
            name : "Sou Hance",
            user_name: "Sou Hance",
            date : "23s",
            user_img : Who_to_follow_avatar,
            comment_text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            like_num : 12

        },
        {
            name : "Sou Hance",
            user_name: "Sou Hance",
            date : "23s",
            user_img : Who_to_follow_avatar,
            comment_text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            like_num : 12

        },
        {
            name : "Sou Hance",
            user_name: "Sou Hance",
            date : "23s",
            user_img : Who_to_follow_avatar,
            comment_text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            like_num : 12

        },
        {
            name : "Sou Hance",
            user_name: "Sou Hance",
            date : "23s",
            user_img : Who_to_follow_avatar,
            comment_text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            like_num : 12

        },
    ]);

    return(
        <Grid container flexDirection={"column"} marginTop={"1rem"} justifyContent={"start"} rowGap={".5rem"}>
            <Grid item >
                {/*<New_comment/>*/}
                <Newpost place_holder={"Add your comment here..."}/>
            </Grid>
            <hr style={{
                width : "100%",
                border : "1px solid #F09D50"
            }}/>
            <Grid item container flexDirection={"column"} rowGap={"1rem"}>
                {
                    Comment_list?.map(({name, user_name, date, user_img, comment_text, like_num}, index) =>
                        <Grid item key={index}>
                            <Comment name={name} user_name={user_name} date={date} user_img={user_img} text={comment_text} like_num={like_num}/>
                        </Grid>
                    )
                }
            </Grid>
        </Grid>
    )
}

export default Comments_tab