import React from "react";
import {Grid} from "@mui/material";
import {profile_avatar, profile_cover, Who_to_follow_avatar} from "../../Constants/images";
import Header from "../../Layout/Header/Header";
import {Link} from "react-router-dom";

const Following_list = (props) => {
    const following_list = [
        {
            name : "Bessie Cooper",
            user_name : "@alessandroveronezi",
            img : profile_cover,
        },
        {
            name : "Bessie Cooper",
            user_name : "@alessandroveronezi",
            img : profile_cover,
        },
        {
            name : "Bessie Cooper",
            user_name : "@alessandroveronezi",
            img : profile_cover,
        },
        {
            name : "Bessie Cooper",
            user_name : "@alessandroveronezi",
            img : profile_cover,
        },
        {
            name : "Bessie Cooper",
            user_name : "@alessandroveronezi",
            img : profile_cover,
        },
        {
            name : "Bessie Cooper",
            user_name : "@alessandroveronezi",
            img : profile_cover,
        },
    ]

    return(
        <Grid container flexDirection={"column"} rowGap={"2rem"}>
            <Grid item>
                <Header title={"Following"} arrow_f={true}/>
            </Grid>
            <Grid item container flexDirection={"column"}>
                {
                    following_list?.map(({name, user_name, img}, index) =>
                        <Grid
                            item
                            container
                            flexDirection={"row"}
                            justifyContent={"space-between"}
                            alignItems={"center"}
                            padding={"1rem"}
                            borderBottom={"1px solid #5B708333"}
                            width={"100%"}
                            flexWrap={"nowrap"}
                            key={index}
                        >
                            <Grid item container flexDirection={"row"} flexWrap={"nowrap"} justifyContent={"start"} columnGap={"1rem"}>
                                <Grid item>
                                    <Link to={`/User/${user_name}`}>
                                        <img
                                            src={img}
                                            alt={"avatar profile"}
                                            style={{
                                                width : "49px",
                                                height : "49px",
                                                borderRadius : "50%"
                                            }}
                                        />
                                    </Link>
                                </Grid>
                                <Grid item container flexDirection={"column"} alignItems={"left"} justifyContent={"center"} rowGap={"5px"}>
                                    <Grid item>
                                        <Link to={`/User/${user_name}`}>
                                            <p className={"p_blue"}>
                                                {name}
                                            </p>
                                        </Link>
                                    </Grid>
                                    <Grid item>
                                        <Link to={`/User/${user_name}`}>
                                            <p className={"p_gray"}>
                                                {user_name}
                                            </p>
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <button className={"app__profile_editbtn"}>
                                    Unfollow
                                </button>
                            </Grid>
                        </Grid>
                    )
                }
            </Grid>
        </Grid>
    )
}

export default Following_list