import React, {useState} from "react";
import Edit_profile from "./Edit_profile";
import Profile from "./Profile";

const Profile_page = (props) => {
    const [Edit_f, setEdit_f] = useState(false);

    return(
        Edit_f ? <Edit_profile set_edit={setEdit_f}/> : <Profile set_edit={setEdit_f}/>
    )
}

export default Profile_page