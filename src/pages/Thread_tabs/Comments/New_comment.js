import React, {useState, useRef} from "react";
import {Grid} from "@mui/material";
import {Who_to_follow_avatar} from "../../../Constants/images";
import ImageIcon from '@mui/icons-material/Image';
import GifBoxIcon from '@mui/icons-material/GifBox';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import "../../Home/Newpost.css";
import {Link} from "react-router-dom";
import {toast} from "react-toastify";
import StickersKeyboard from "../../Home/Stickers_keyboard";

const New_comment = (props) => {

    const input_image = useRef(null);
    const [comment_text, setcomment_text] = useState("");

    const [Show_stickers_keyboard, setShow_stickers_keyboard] = useState(false);

    const get_image = () => {
        if (localStorage.getItem("image") && localStorage.getItem("image") !== "undefined"){
            return localStorage.getItem("image");
        }
        return Who_to_follow_avatar;
    }

    const [image_src, setImage_src] = useState(get_image);
    const [image_file, setImage_file] = useState(null);
    const [image_path, setImage_path] = useState(null);

    const new_comment_send_handler = (e) => {
        if (!comment_text){
            return ;
        };


        const data = new FormData();
        data.append("text", comment_text);
        if (image_file){
            data.append("image", image_file);
        }

        // Send_new_post((Ok_flag, result)=>{
        //     if (Ok_flag){
        //         toast.success("Thank you for keeping our community safe!");
        //         update_posts();
        //         setcomment_text("");
        //         setImage_path(null);
        //         setImage_file(null);
        //     }else {
        //         toast.error(result.response.data.message);
        //     }
        // }, data);
        toast.success("Thank you for keeping our community safe!");
        // console.log("Thank you for keeping our community safe!");
    };


    const handleStickerSelect = (sticker) => {
        setcomment_text((p) => p+sticker);
    };


    const change_image_handler = (e) => {
        if(e.target.files && e.target.files.length>0){
            setImage_file(e.target.files[0]);
        }

        const reader = new FileReader();
        reader.onload =(e)=>{
            setImage_path(e.target.result);
        };
        reader.readAsDataURL(e.target.files[0]);
    }

    const upload_image_handler = () => {
        input_image.current.click();
    }



    return(
        <Grid container flexDirection={"column"} className={"section"} padding={"1rem"} rowGap={"1rem"}>
            <Grid item container flexDirection={"row"} alignItems={"start"} columnGap={"1rem"}>
                <Grid item>
                    <Link to={"/Profile"}>
                        <img src={Who_to_follow_avatar} alt={"profile avatar"} style={{
                            width : "49px",
                            height : "49px"
                        }}/>
                    </Link>
                </Grid>
                <Grid item>
                    <textarea
                        value={comment_text}
                        onChange={(e) => setcomment_text(e.target.value)}
                        placeholder={"Add your comment here..."}
                        className={"app__home-newpost-input"}
                    />
                    {
                        Show_stickers_keyboard &&
                        <Grid item>
                            <StickersKeyboard onStickerSelect={handleStickerSelect}/>
                        </Grid>
                    }
                </Grid>
            </Grid>
            {
                image_path &&
                <Grid item container flexDirection={"row"} justifyContent={"center"} alignItems={"center"}>
                    <Grid item style={{backgroundImage : `url(${image_path})`}} className={"app__home-newpost-postimg"}></Grid>
                </Grid>
            }
            <input ref={input_image} type={"file"} style={{display : "none"}} onChange={change_image_handler}/>
            <Grid item container flexDirection={"row"} justifyContent={"space-between"} alignItems={"end"} flexWrap={"nowrap"}>
                <Grid item xs={4} container flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"} marginLeft={"3rem"}>
                    <Grid item>
                        <ImageIcon fontSize={"20px"} className={"app__home-newpost-icon"} onClick={upload_image_handler}/>
                    </Grid>
                    <Grid item>
                        <GifBoxIcon fontSize={"20px"} className={"app__home-newpost-icon"} onClick={upload_image_handler}/>
                    </Grid>
                    <Grid item>
                        <SentimentSatisfiedAltIcon
                            fontSize={"20px"}
                            className={"app__home-newpost-icon"}
                            onClick={() => setShow_stickers_keyboard((p) => !p)}
                        />
                    </Grid>
                </Grid>
                <Grid item xs={8} flexGrow={1} justifyContent={"end"} container>
                    <button className={"app__home-newpost-postbtn"} onClick={(e) => new_comment_send_handler(e)}>
                        Post
                    </button>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default New_comment