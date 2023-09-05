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
import {Link, useNavigate} from "react-router-dom";

const Sign_Up = (props) => {

    const navigate = useNavigate();

    const go_back_handler = () => {
        navigate(-1);
    }

    const [Email_text, setEmail_text] = useState("");
    const [Password, setPassword] = useState("");
    const [Visibility, setVisibility] = useState(false);
    const [Firstname, setFirstname] = useState("");
    const [Lastname, setLastname] = useState("");
    const [Phone_number, setPhone_number] = useState("");

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
                            Step 1 of 2
                        </p>
                        <p className={"p_gray"} style={{fontWeight : "300"}}>
                            Signup
                        </p>
                    </Grid>
                </Grid>
                <Grid item>
                    <h1 className={"app__login_title"} style={{marginBottom : "1rem"}}>
                        Welcome to Survivor!
                    </h1>
                </Grid>
                <Grid item>
                    <p className={"p_blue"}>
                        It's okay to be you, it's okay to struggle, and it's okay to seek support. Join our community today, where every story matters and you're never alone. Sign up now and become part of our supportive network.
                        <br/>
                        <span style={{
                            color : "#F09D50"
                        }}>Together, we can weather any storm.</span>
                    </p>
                </Grid>
                <Grid item container flexDirection={"row"} width={"100%"} flexWrap={"nowrap"} columnGap={"10px"}>
                    <Grid item className={"app__login_input"} container flexDirection={"column"} rowGap={"5px"} >
                        <label>First Name</label>
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
                                <input required type={"text"} value={Firstname} placeholder={"Your firstname"} onChange={(e) => setFirstname(e.target.value)}/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={"app__login_input"} container flexDirection={"column"} rowGap={"5px"} marginTop={"1rem"}>
                        <label>Last Name</label>
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
                                <input required type={"text"} value={Lastname} placeholder={"Your lastname"} onChange={(e) => setLastname(e.target.value)}/>
                            </Grid>
                        </Grid>
                    </Grid>
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
                <Grid item className={"app__login_input"} container flexDirection={"column"} rowGap={"5px"}>
                    <label>Phone Number</label>
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
                            <PhoneIphoneOutlinedIcon style={{fontSize : "20px" , color : "#5B7083"}}/>
                        </Grid>
                        <Grid item width={"100%"}>
                            <input required type={"tel"} value={Phone_number} placeholder={"(+123) 9876543210"} onChange={(e) => setPhone_number(e.target.value)}/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={"app__login_input"} container flexDirection={"column"} rowGap={"5px"}>
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
                            <input required type={Visibility ? "type" : "password"} value={Password} placeholder={"Your Password"} onChange={(e) => setPassword(e.target.value)}/>
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
                <Grid item className={"app__login_submit_btn"} margin={"10px 0 5px"}>
                    <button type={"button"}>
                        Continue
                    </button>
                </Grid>
                <Grid item width={"100%"}>
                    <p className={"p_orange"} >
                        <span style={{
                            color : "#010752"
                        }}>Already have account?</span>
                        <Link to={"/login"}>
                            <span className={"hover_cursor"}>Login</span>
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

export default Sign_Up