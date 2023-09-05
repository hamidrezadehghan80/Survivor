import React from "react";
import "./header.css"
import {header_image} from "../../Constants/images";
import {Grid} from "@mui/material";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import {Link, useNavigate} from "react-router-dom";

const Header = ({title, arrow_f}) => {

    const navigate = useNavigate();

    const go_back_handler = () => {
        navigate(-1);
    }

    return(
        <Grid container minWidth={"100%"} height={"3rem"} justifyContent={"center"} alignItems={"center"} className={"section"}>
            <Grid item container flexDirection={"row"} padding={"0 1rem"} justifyContent={"space-between"} alignItems={"center"} flexWrap={"nowrap"}>
                <Grid item container flexDirection={"row"} columnGap={"3px"} alignItems={"center"}>
                    {
                        arrow_f &&
                        <ArrowCircleLeftIcon className={"app__header_arrow_icon hover_cursor"} onClick={go_back_handler}/>
                    }
                    <h3 className={"title_text"}>
                        {title}
                    </h3>
                </Grid>
                <Grid item>
                    <img src={header_image} alt={"header image"}/>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Header