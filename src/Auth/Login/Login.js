import React, {useState} from "react";
import {Grid} from "@mui/material";
import {login_cover} from "../../Constants/images";
import GitHubIcon from '@mui/icons-material/GitHub';
import "./Login.css";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import {Link} from "react-router-dom";

const Login = (props) => {

    const [Email_text, setEmail_text] = useState("");
    const [Password, setPassword] = useState("");
    const [Visibility, setVisibility] = useState(false);

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
                <Grid item>
                    <h1 className={"app__login_title"}>
                        Welcome back to Survivor!
                    </h1>
                </Grid>
                <Grid item>
                    <p className={"p_blue"}>
                        We're here, ready to support you. Sign in to your account and let's continue the journey together.
                        <br/>
                        <span style={{
                            color : "#F09D50"
                        }}>Remember, you're not alone in this.</span>
                    </p>
                </Grid>
                <Grid item className={"app__login_input"} container flexDirection={"column"} rowGap={"5px"} marginTop={"1rem"}>
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
                            <input type={"email"} value={Email_text} placeholder={"Your email"} onChange={(e) => setEmail_text(e.target.value)} required/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={"app__login_input"} container flexDirection={"column"} rowGap={"5px"} marginTop={"1rem"}>
                    <label>Password</label>
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
                        <Grid>
                            <LockOutlinedIcon style={{fontSize : "20px" , color : "#5B7083"}}/>
                        </Grid>
                        <Grid item width={"100%"}>
                            <input type={Visibility ? "type" : "password"} value={Password} placeholder={"Your Password"} onChange={(e) => setPassword(e.target.value)} required/>
                        </Grid>
                        <Grid item onClick={() => setVisibility((p) => !p)}>
                            {
                                Visibility ?
                                    <VisibilityOutlinedIcon className={"hover_cursor"} style={{fontSize : "20px" , color : "#5B7083"}}/>
                                    :
                                    <VisibilityOffOutlinedIcon className={"hover_cursor"} style={{fontSize : "20px" , color : "#5B7083"}}/>
                            }
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item marginTop={"1rem"} width={"100%"}>
                    <Link to={"/login/forgot_password"}>
                        <p className={"p_orange hover_cursor"}>Forgot Password?</p>
                    </Link>
                </Grid>
                <Grid item className={"app__login_submit_btn"}>
                    <button type={"button"}>
                        Login
                    </button>
                </Grid>
                <Grid item width={"100%"}>
                    <p className={"p_orange"} >
                        <span style={{
                            color : "#010752"
                        }}>Don’t have an account?</span>
                        <Link to={"/login/signup"}>
                            <span className={"hover_cursor"}>Signup</span>
                        </Link>
                    </p>
                </Grid>
                <Grid item container
                      flexDirection={"row"}
                      width={"100%"}
                      flexWrap={"nowrap"}
                      alignItems={"center"}
                      columnGap={"2px"}
                      marginTop={"2rem"}
                >
                    <hr style={{
                        color : "#CDCED1",
                        width : "100%"
                    }}/>
                    <Grid item width={"100%"} textAlign={"center"}>
                        <p className={"p_gray"} style={{
                            fontSize : "15px"
                        }}>or continue with</p>
                    </Grid>
                    <hr style={{
                        color : "#CDCED1",
                        width : "100%"
                    }}/>
                </Grid>
                <Grid item marginTop={"10px"}>
                    <GitHubIcon style={{
                        fontSize : "69px"
                    }} className={"hover_cursor"}/>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Login