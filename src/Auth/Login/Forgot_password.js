import React, {useState} from "react";
import {Grid} from "@mui/material";
import {login_cover} from "../../Constants/images";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import NavigateBeforeOutlinedIcon from '@mui/icons-material/NavigateBeforeOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import {useNavigate} from "react-router-dom";

const Forgot_password = (props) => {

    const navigate = useNavigate();

    const go_back_handler = () => {
        navigate(-1);
    }

    const [Email_text, setEmail_text] = useState("");

    return(
        <Grid
            container
            flexDirection={"row"}
            width={"100%"}>
            <Grid item xs={6}>
                <img src={login_cover} alt={"login cover"} style={{
                    width : "100%",
                    height : "99.7vh"
                }}/>
            </Grid>
            <Grid item xs={6} container flexDirection={"column"} justifyContent={"center"} alignItems={"center"} padding={"0 168px"}>
                <Grid item container width={"100%"} flexDirection={"row"} justifyContent={"space-between"} marginBottom={"1rem"} flexWrap={"nowrap"}>
                    <Grid item container flexDirection={"row"} onClick={go_back_handler}>
                        <NavigateBeforeOutlinedIcon style={{color : "#F09D50", fontSize : "15px", fontWeight : "bold"}}/>
                        <p className={"p_blue hover_cursor"}>Back</p>
                    </Grid>
                    <Grid item container flexDirection={"column"} justifyContent={"start"}  alignItems={"end"}>
                        <p className={"p_gray"}>
                            Step 1 of 3
                        </p>
                        <p className={"p_gray"} style={{fontWeight : "300"}}>
                            Forgot Password
                        </p>
                    </Grid>
                </Grid>
                <Grid item>
                    <h1 className={"app__login_title"} style={{margin : "3rem 0 1rem"}}>
                        Forgot Your Password?
                        Let's Get You Back on Track!
                    </h1>
                </Grid>
                <Grid item>
                    <p className={"p_blue"}>
                        It happens to the best of us. Please enter the email address you used to create your Survivor account. We'll send you <span style={{color : "#F09D50"}}>a 6-digit code</span> to reset your password.
                        <br/>
                        <br/>
                        Just follow the steps in the email, and you'll be back to <span style={{color : "#F09D50"}}>sharing, supporting, and surviving</span> in no time.
                        <br/>
                        <br/>
                        Remember to check your spam or junk folder if you don't see the email.
                        <br/>
                        <br/>
                        If you're still having trouble, don't hesitate to contact our support team. We're here to help!
                    </p>
                </Grid>
                <Grid item className={"app__login_input"} container flexDirection={"column"} rowGap={"5px"}>
                    <label>Email</label>
                    <Grid
                        container
                        flexDirection={"row"}
                        alignItems={"center"}
                        border={"1px solid #5B708333"}
                        padding={"3px 5px"}
                        flexWrap={"nowrap"}
                        borderRadius={"5px"}
                        columnGap={"3px"}
                    >
                        <Grid item>
                            <EmailOutlinedIcon style={{fontSize : "20px" , color : "#5B7083"}}/>
                        </Grid>
                        <Grid item width={"100%"}>
                            <input required type={"email"} value={Email_text} placeholder={"Your email"} onChange={(e) => setEmail_text(e.target.value)}/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={"app__login_submit_btn"} margin={"10px 0 5px"}>
                    <button type={"button"}>
                        Next
                    </button>
                </Grid>
            </Grid>
        </Grid>
    )

}

export default Forgot_password