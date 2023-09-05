import React from "react";
import "./Faq.css"
import {Grid} from "@mui/material";
import Faq_item from "./Faq_item";
import Header from "../../Layout/Header/Header";

const FAQ = () => {
    return(
        <Grid container flexDirection={"column"} rowGap={"2rem"}>
            <Grid item>
                <Header title={"FAQ"} arrow_f={false}/>
            </Grid>
            <Grid item container flexDirection={"column"} rowGap={".5rem"}>
                <Grid item>
                    <Faq_item qusetion={"What is Survivor?"} answer={"text"}/>
                </Grid>
                <Grid item>
                    <Faq_item qusetion={"How does Survivor ensure user safety and privacy?"} answer={"text"}/>
                </Grid>
                <Grid item>
                    <Faq_item qusetion={"Who is Survivor for?"} answer={"text"}/>
                </Grid>
                <Grid item>
                    <Faq_item qusetion={"How can I report abusive behavior or content on Survivor?"} answer={"text"}/>
                </Grid>
                <Grid item>
                    <Faq_item qusetion={"How can I report abusive behavior or content on Survivor?"} answer={"text"}/>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default FAQ