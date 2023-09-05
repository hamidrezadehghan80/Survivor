import React, {useState} from "react";
import {Grid} from "@mui/material";
import "./Faq_item.css";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Faq_item = ({qusetion, answer}) => {

    const [Show_answer, setShow_answer] = useState(false);

    return(
        <Grid container flexDirection={"column"} className={"section"} padding={"1rem"}>
            <Grid item container flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"} flexWrap={"nowrap"}>
                <Grid item xs={9}>
                    <p className={"app__faq_question"}>
                        {qusetion}
                    </p>
                </Grid>
                <Grid item xs={2} container justifyContent={"end"}>
                    {
                        Show_answer ?
                            <RemoveIcon className={"app__faq_icon"} onClick={() => setShow_answer((p) => !p)}/>
                            :
                            <AddIcon className={"app__faq_icon"} onClick={() => setShow_answer((p) => !p)}/>
                    }
                </Grid>
            </Grid>
            {
                Show_answer &&
                <Grid item className={"p_blue"}>
                    <p>
                        {answer}
                    </p>
                </Grid>
            }
        </Grid>
    )
}

export default Faq_item