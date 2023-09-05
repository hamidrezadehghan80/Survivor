import React, {useEffect, useState} from "react";
import {Grid} from "@mui/material";
import {login_cover} from "../../Constants/images";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import NavigateBeforeOutlinedIcon from '@mui/icons-material/NavigateBeforeOutlined';
import CheckIcon from '@mui/icons-material/Check';
import {useNavigate} from "react-router-dom";

const New_password = (props) => {

    const navigate = useNavigate();

    const go_back_handler = () => {
        navigate(-1);
    }

    const [Password, setPassword] = useState("");
    const [confirm_Password, setconfirm_Password] = useState("");
    const [Visibility_p, setVisibility_p] = useState(false);
    const [Visibility_c, setVisibility_c] = useState(false);
    const [pass_length, setPass_length] = useState(false);
    const [Upper_c, setUpper_c] = useState(false);
    const [number_f, setnumber_f] = useState(false);
    const [special_c, setSpecial_c] = useState(false);
    const [pass_match, setPass_match] = useState(false);

    useEffect(() => {
        check_match();
        check_length();
        check_upper_c();
        check_number();
        check_special_c();
    }, [Password, confirm_Password]);

    const check_match = () => {
        if (Password === confirm_Password){
            setPass_match(true);
        }
        else{
            setPass_match(false);
        }
    };

    const check_length = () => {
        if (Password.length >= 8 && Password.length <= 32){
            setPass_length(true);
        }
        else {
            setPass_length(false);
        }
    };

    const check_upper_c = () => {
        const regex = /[A-Z]/;
        const hasUppercase = regex.test(Password);

        if (hasUppercase){
            setUpper_c(true);
        }
        else {
            setUpper_c(false);
        }
    };

    const check_number = () => {
        const regex = /[0-9]/;
        const has_number = regex.test(Password);

        if (has_number){
            setnumber_f(true);
        }
        else {
            setnumber_f(false);
        }
    };

    const check_special_c = () => {
        const regex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
        const has_special_c = regex.test(Password);

        if (has_special_c){
            setSpecial_c(true);
        }
        else {
            setSpecial_c(false);
        }
    };

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
                            Step 3 of 3
                        </p>
                        <p className={"p_gray"} style={{fontWeight : "300"}}>
                            Forgot Password
                        </p>
                    </Grid>
                </Grid>
                <Grid item>
                    <h1 className={"app__login_title"} style={{margin : "3rem 0 1rem"}}>
                        Create New Password
                    </h1>
                </Grid>
                <Grid item container flexDirection={"row"} justifyContent={"start"}>
                    <p className={"p_blue"}>
                        Enter the new password for your account.
                    </p>
                </Grid>
                <Grid item className={"app__login_input"} container flexDirection={"column"} rowGap={"5px"}>
                    <label>New Password</label>
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
                            <input type={Visibility_p ? "type" : "password"} value={Password} placeholder={"***********"} onChange={(e) => setPassword(e.target.value)}/>
                        </Grid>
                        <Grid item onClick={() => setVisibility_p((p) => !p)}>
                            {
                                Visibility_p ?
                                    <VisibilityOutlinedIcon className={"hover_cursor"} style={{fontSize : "20px" , color : "#5B7083"}}/>
                                    :
                                    <VisibilityOffOutlinedIcon className={"hover_cursor"} style={{fontSize : "20px" , color : "#5B7083"}}/>
                            }
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={"app__login_input"} container flexDirection={"column"} rowGap={"5px"}>
                    <label>Confirm Password</label>
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
                            <input type={Visibility_c ? "type" : "password"} value={confirm_Password} placeholder={"***********"} onChange={(e) => setconfirm_Password(e.target.value)}/>
                        </Grid>
                        <Grid item onClick={() => setVisibility_c((p) => !p)}>
                            {
                                Visibility_c ?
                                    <VisibilityOutlinedIcon className={"hover_cursor"} style={{fontSize : "20px" , color : "#5B7083"}}/>
                                    :
                                    <VisibilityOffOutlinedIcon className={"hover_cursor"} style={{fontSize : "20px" , color : "#5B7083"}}/>
                            }
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item container flexDirection={"column"} padding={"1rem"}>
                    <Grid item container flexDirection={"row"} alignItems={"center"} columnGap={"5px"}>
                        <Grid item>
                            <CheckIcon style={pass_match ? {color : "#F09D50"} : {color : "#5B7083"}}/>
                        </Grid>
                        <Grid item>
                            <p className={"p_gray"} >
                                Passwords must be the same
                            </p>
                        </Grid>
                    </Grid>
                    <Grid item container flexDirection={"row"} alignItems={"center"} columnGap={"5px"}>
                        <Grid item>
                            <CheckIcon style={pass_length ? {color : "#F09D50"} : {color : "#5B7083"}}/>
                        </Grid>
                        <Grid item>
                            <p className={"p_gray"} >
                                Password must be between 8 to 32 character.
                            </p>
                        </Grid>
                    </Grid>
                    <Grid item container flexDirection={"row"} alignItems={"center"} columnGap={"5px"}>
                        <Grid item>
                            <CheckIcon style={Upper_c ? {color : "#F09D50"} : {color : "#5B7083"}}/>
                        </Grid>
                        <Grid item>
                            <p className={"p_gray"} >
                                Must contain a uppercase character.
                            </p>
                        </Grid>
                    </Grid>
                    <Grid item container flexDirection={"row"} alignItems={"center"} columnGap={"5px"}>
                        <Grid item>
                            <CheckIcon style={number_f ? {color : "#F09D50"} : {color : "#5B7083"}}/>
                        </Grid>
                        <Grid item>
                            <p className={"p_gray"} >
                                Must contain a number.
                            </p>
                        </Grid>
                    </Grid>
                    <Grid item container flexDirection={"row"} alignItems={"center"} columnGap={"5px"}>
                        <Grid item>
                            <CheckIcon style={special_c ? {color : "#F09D50"} : {color : "#5B7083"}}/>
                        </Grid>
                        <Grid item>
                            <p className={"p_gray"} >
                                Must contain one special character.
                            </p>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={"app__login_submit_btn"} margin={"10px 0 5px"}>
                    <button type={"button"}>
                        Reset Password
                    </button>
                </Grid>
            </Grid>
        </Grid>
    )

}

export default New_password