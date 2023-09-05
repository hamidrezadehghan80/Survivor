import React, {useState} from "react";
import {Quote_close, Quote_open} from "../../Constants/images";
import "./Qoute.css";

const Quote = () => {

    const [Quote_toggle, setQuote_toggle] = useState(false);

    const handle_close = () => {
        setQuote_toggle((prev_state) => !prev_state);
    };

    return(
        <div className={"section"}>
            {
                Quote_toggle &&
                <>
                    <div className="app__leftside_modal flex_center">
                        <img src={Quote_open}/>
                    </div>
                    <div className={"app__leftside_modal_overlay"} onClick={()=>handle_close()}>
                    </div>
                </>

            }
            <p className={"title_text"} style={{
                margin : "1rem"
            }}>Quote Of The Day</p>
            <img src={Quote_close} alt={"Quote close"} onClick={() => handle_close()}/>
        </div>
    )
}

export default Quote