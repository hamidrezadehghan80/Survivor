import React, {useEffect, useState} from "react";
import "./who_to_follow.css"
import {Who_to_follow_avatar} from "../../Constants/images";
import {Grid} from "@mui/material";
import {Link} from "react-router-dom";


const Who_to_follow = () => {

    const [User_list, setUser_list] = useState([
        {
            name : "Jenny Wilson",
            user_name : "@gabrielcantarin",
            img_src : Who_to_follow_avatar
        },
        {
            name : "Jenny Wilson",
            user_name : "@gabrielcantarin",
            img_src : Who_to_follow_avatar
        },
        {
            name : "Jenny Wilson",
            user_name : "@gabrielcantarin",
            img_src : Who_to_follow_avatar
        },
        {
            name : "Jenny Wilson",
            user_name : "@gabrielcantarin",
            img_src : Who_to_follow_avatar
        },
        {
            name : "Jenny Wilson",
            user_name : "@gabrielcantarin",
            img_src : Who_to_follow_avatar
        },
        {
            name : "Jenny Wilson",
            user_name : "@gabrielcantarin",
            img_src : Who_to_follow_avatar
        },
        {
            name : "Jenny Wilson",
            user_name : "@gabrielcantarin",
            img_src : Who_to_follow_avatar
        },
        {
            name : "Jenny Wilson",
            user_name : "@gabrielcantarin",
            img_src : Who_to_follow_avatar
        },
        {
            name : "Jenny Wilson",
            user_name : "@gabrielcantarin",
            img_src : Who_to_follow_avatar
        },
        {
            name : "Jenny Wilson",
            user_name : "@gabrielcantarin",
            img_src : Who_to_follow_avatar
        },

    ]);
    const [show_num, setShow_num] = useState(1);
    const [Show_more, setShow_more] = useState(true);

    useEffect(() => {
        if (show_num*4 < User_list.length){
            setShow_more(true);
        }else {
            setShow_more(false);
        }
    }, [show_num]);

    return(
        <div className={"section app__rightside_who_to_follow"}>
            <p className={"title_text"}>Who to follow</p>
            <hr/>
            {
                User_list.slice(0, show_num*4)?.map(({name, user_name, img_src}, index)=>
                    <Grid
                        key={index}
                        container
                        flexDirection={"row"}
                        columnGap={"1rem"}
                        padding={".5rem 1rem"}
                        flexWrap={"nowrap"}
                        borderBottom={"1px solid var(--divider_dark)"}>
                        <Grid item>
                            <Link to={`/User/${user_name}`}>
                                <img src={img_src} alt={"user avatar"} style={{
                                    width : "49px",
                                    height : "49px",
                                    borderRadius : "50%",
                                }}/>
                            </Link>
                        </Grid>
                        <Grid item container flexDirection={"column"} rowGap={"5px"}>
                            <Link to={`/User/${user_name}`}>
                                <p className={"p_blue"}>
                                    {name}
                                </p>
                            </Link>
                            <Link to={`/User/${user_name}`}>
                                <p className={"p_gray"}>
                                    {user_name}
                                </p>
                            </Link>
                        </Grid>
                    </Grid>
                )
            }
            <p
                className={"p_orange hover_cursor"}
                onClick={() => setShow_num((p) =>{
                    if(Show_more){
                        return p+1;
                    }
                    else {
                        return p-1;
                    }
            })}>{Show_more ? "Show More" : "Show Less"}</p>
        </div>
    )
}

export default Who_to_follow