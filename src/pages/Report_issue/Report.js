import React, {useState} from "react";
import "./Report.css"
import {Grid} from "@mui/material";
import Header from "../../Layout/Header/Header";

const Report = (props) => {
    const [text, set_text] = useState("");

    return(
        <Grid container flexDirection={"column"} rowGap={"2rem"}>
            <Grid item >
                <Header title={"Report Technical Issues"}/>
            </Grid>
            <Grid item>
                <Grid container flexDirection={"column"} padding={"1rem"} className={"section"} rowGap={"1rem"}>
                    <Grid item>
                        <h1 className={"app__report_title"}>
                            Experiencing Technical Difficulties? We're Here to Help.
                        </h1>
                    </Grid>
                    <Grid item marginTop={"1rem"}>
                        <p className={"app__report_text"}>
                            We're sorry if you're having trouble with our Survivor app. Your experience matters to us and we're committed to making it as smooth and beneficial as possible.
                        </p>
                    </Grid>
                    <Grid item marginTop={"1rem"}>
                        <p className={"app__report_text"}>
                            To help us resolve your issue quickly, please provide a detailed explanation of the issue you’re facing below:
                        </p>
                    </Grid>
                    <Grid item width={"100%"}>
                <textarea
                    className={"app__report_input"}
                    value={text}
                    onChange={(e) => set_text(e.target.value)}
                />
                    </Grid>
                    <Grid item container justifyContent={"end"}>
                        <button className={"app__home-newpost-postbtn"}>
                            Send
                        </button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Report