import "./library.css"
import React, {useState, useEffect} from "react";
import {Line, LineTitle} from "./Line";
const Library = ({ currPlayList }) => {

    const {tracks} = currPlayList
       //console.log("hi", tracks);
       // console.log(typeof(tracks));
    return (
        <div className="library">
        <div ><LineTitle /></div>
        <div>
            {tracks.map( (track, index)=>{ 
                return <Line key={index} index={index+1} song={track}/>
            })}
        </div>
        </div>
    )
}

export default Library;