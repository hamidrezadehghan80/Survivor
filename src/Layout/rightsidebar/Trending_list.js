import React, {useState, useEffect} from "react";
import "./Trending_list.css"
import {Trend_post} from "../../Constants/images";
import Trending_post from "./Trending_post";


const Trending_list = (props) => {

    const [trending_list, setTrending_list] = useState([
        {
            publisher : "Mental Health Weekly",
            date : "Last night",
            title : "Breakthrough Research Discovers New Links Between Gut Health and Anxiety Disorders",
            tag : "#GutBrainConnection",
            img_src : Trend_post
        },
        {
            publisher : "Mental Health Weekly",
            date : "Last night",
            title : "Breakthrough Research Discovers New Links Between Gut Health and Anxiety Disorders",
            tag : "#GutBrainConnection",
            img_src : Trend_post
        },
        {
            publisher : "Mental Health Weekly",
            date : "Last night",
            title : "Breakthrough Research Discovers New Links Between Gut Health and Anxiety Disorders",
            tag : "#GutBrainConnection",
            img_src : Trend_post
        },
        {
            publisher : "Mental Health Weekly",
            date : "Last night",
            title : "Breakthrough Research Discovers New Links Between Gut Health and Anxiety Disorders",
            tag : "#GutBrainConnection",
            img_src : Trend_post
        },
        {
            publisher : "Mental Health Weekly",
            date : "Last night",
            title : "Breakthrough Research Discovers New Links Between Gut Health and Anxiety Disorders",
            tag : "#GutBrainConnection",
            img_src : Trend_post
        },
        {
            publisher : "Mental Health Weekly",
            date : "Last night",
            title : "Breakthrough Research Discovers New Links Between Gut Health and Anxiety Disorders",
            tag : "#GutBrainConnection",
            img_src : Trend_post
        },

    ]);
    const [show_num, setShow_num] = useState(1);
    const [Show_more, setShow_more] = useState(true);

    useEffect(() => {
        if (show_num*3 < trending_list.length){
            setShow_more(true);
        }else {
            setShow_more(false);
        }
    }, [show_num]);

    return(
        <div className={"section app__rightside_trending"}>
            <p className={"title_text"}>Trending</p>
            <hr/>
            {
                trending_list.slice(0,show_num*3)?.map(({publisher, date, title, tag, img_src}, index)=>
                    <Trending_post publisher={publisher} date={date} title={title} tag={tag} img_src={img_src} key={index}/>
                )
            }
            <p
                className={"p_orange hover_cursor"}
                onClick={() => setShow_num((p) =>{
                    if(Show_more){
                        return p+1;
                    }
                    else {
                        return p-1;
                    }
                })}
            >{Show_more ? "Show More" : "Show Less"}</p>
        </div>
    )
}

export default Trending_list