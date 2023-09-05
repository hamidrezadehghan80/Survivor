import React from "react";
import {Grid} from "@mui/material";
import Thread_post from "./Thread_post";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import "./Thread.css"
import Comments_tab from "./Comments/Comments_tab";
import Solution_tab from "./Solutions/Solution_tab";
import Header from "../../Layout/Header/Header";
import {useParams} from "react-router-dom";
import {Use_Post_State} from "../../Context/Post_Context";

const Thread = () => {

    const {Post_Id} = useParams();
    const {Post_list} = Use_Post_State();
    // console.log(Post_list);

    const post = Post_list.find((post) => post.post_id === Post_Id);
    const {post_id, name, username, date, user_img, post_text, post_img, like_num, comment_num} = post;

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return(
        <Grid container flexDirection={"column"} rowGap={"2rem"}>
            <Grid item>
                <Header title={"Thread"} arrow_f={true}/>
            </Grid>
            <Grid item container flexDirection={"column"}>
                <Grid item>
                    <Thread_post
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
                <hr style={{
                    width : "100%",
                    height : "0",
                    border : "3px solid #F09D50",
                    borderRadius : "2px"
                }}/>
                <Grid item container justifyContent={"center"}>
                    <Box sx={{ width: '100%', typography: 'body1' }}>
                        <TabContext value={value}>
                            <Box>
                                <TabList indicatorColor={"none"} onChange={handleChange} aria-label="lab API tabs example" style={{
                                    borderRadius : "1rem",
                                }}>
                                    <Tab className={value === "1" ? "app__thread_tab_btn-active" : "app__thread_tab_btn"} label="Comments" value="1" />
                                    <Tab className={value === "2" ? "app__thread_tab_btn-active" : "app__thread_tab_btn"} label="Solutions" value="2" />
                                </TabList>
                            </Box>
                            <TabPanel value="1" sx={{padding : "0"}}><Comments_tab post_id={post_id}/></TabPanel>
                            <TabPanel value="2" sx={{padding : "0"}}><Solution_tab post_id={post_id}/></TabPanel>
                        </TabContext>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Thread