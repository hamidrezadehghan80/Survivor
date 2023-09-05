import React, {useState} from "react";
import {Grid} from "@mui/material";
import {Search} from "@mui/icons-material";
import {profile_avatar, Who_to_follow_avatar} from "../../Constants/images";
import Header from "../../Layout/Header/Header";


const Users_Search = (props) => {
    const [Search_text, setSearch_text] = useState("");
    const search_result_list = [
        {
            name : "Bessie Cooper",
            id : "@alessandroveronezi",
            img : profile_avatar,
        },
        {
            name : "Bessie Cooper",
            id : "@alessandroveronezi",
            img : Who_to_follow_avatar,
        },
        {
            name : "Bessie Cooper",
            id : "@alessandroveronezi",
            img : Who_to_follow_avatar,
        },
        {
            name : "Bessie Cooper",
            id : "@alessandroveronezi",
            img : Who_to_follow_avatar,
        },
        {
            name : "Bessie Cooper",
            id : "@alessandroveronezi",
            img : Who_to_follow_avatar,
        },
    ]

    return(
        <Grid container flexDirection={"column"} rowGap={"2rem"}>
            <Grid item>
                <Header title={"Home"}/>
            </Grid>
            <Grid item container flexDirection={"column"}>
                <Grid item container flexDirection={"row"} alignItems={"center"} className={"app__rightside_searchbox"}>
                    <Search/>
                    <input placeholder={"search..."} value={Search_text} onChange={(e) => setSearch_text(e.target.value)}/>
                </Grid>
                {
                    search_result_list?.map(({name, id, img}, index) =>
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
                                    <img
                                        src={img}
                                        alt={"avatar profile"}
                                        style={{
                                            width : "49px",
                                            height : "49px",
                                            borderRadius : "50%"
                                        }}
                                    />
                                </Grid>
                                <Grid item container flexDirection={"column"} alignItems={"left"} justifyContent={"center"} rowGap={"5px"}>
                                    <Grid item>
                                        <p className={"p_blue"}>
                                            {name}
                                        </p>
                                    </Grid>
                                    <Grid item>
                                        <p className={"p_gray"}>
                                            {id}
                                        </p>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    )
                }
            </Grid>
        </Grid>
    )
}

export default Users_Search