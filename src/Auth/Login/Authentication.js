import React, {useState} from "react";
import {Grid} from "@mui/material";
import {login_cover} from "../../Constants/images";
import NavigateBeforeOutlinedIcon from "@mui/icons-material/NavigateBeforeOutlined";

const Authentication = (props) => {

    const [Verification_code, setVerification_code] = useState("");

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
                    <Grid item container flexDirection={"row"}>
                        <NavigateBeforeOutlinedIcon style={{color : "#F09D50", fontSize : "15px", fontWeight : "bold"}}/>
                        <p className={"p_blue hover_cursor"}>Back</p>
                    </Grid>
                    <Grid item container flexDirection={"column"} justifyContent={"start"}  alignItems={"end"}>
                        <p className={"p_gray"}>
                            Step 2 of 2
                        </p>
                        <p className={"p_gray"} style={{fontWeight : "300"}}>
                            Signup
                        </p>
                    </Grid>
                </Grid>
                <Grid item>
                    <h1 className={"app__login_title"} style={{margin : "2.5rem 0 1rem"}}>
                        One More Step to Join the
                        Survivor Community!
                    </h1>
                </Grid>
                <Grid item>
                    <p className={"p_blue"}>
                        To keep our community secure and ensure you have the best experience, we need to verify your email address.
                        <br/>
                        <br/>
                        We've just sent you a
                        <span style={{color : "#F09D50"}}>6-digit code</span>. Please enter this code below to complete your sign-up process.
                        <br/>
                        <br/>
                        <span style={{color : "#F09D50"}}>Thank you for joining Survivor. We can't wait to welcome you to our supportive community!</span>
                    </p>
                </Grid>
                <Grid item className={"app__login_input"} container flexDirection={"column"} margin={"1rem 0!important"}>
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
                        <Grid item width={"100%"}>
                            <input
                                type={"tel"}
                                maxLength={6}
                                value={Verification_code}
                                onChange={(e) => setVerification_code(e.target.value)}
                                style={{textAlign : "center"}}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={"app__login_submit_btn"} margin={".5rem 0 1rem"}>
                    <button type={"button"}>
                        Verify
                    </button>
                </Grid>
                <Grid item width={"100%"}>
                    <p className={"p_blue"}>
                        Didn't receive a code? Please check your spam or junk folder, or click 'Resend Code' if necessary.
                    </p>
                </Grid>
                <Grid item width={"100%"} marginTop={"10px"}>
                    <p className={"p_orange"} >
                        <span style={{
                            color : "#010752"
                        }}>Didn’t Receive code?</span>
                        <span className={"hover_cursor"}>Resend Code</span>
                    </p>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Authentication