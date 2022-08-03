import React, { useState, useEffect } from "react";
import "./mediaplayer.css"

import MediaPlayer from "./MediaPlayer";
import Library from "./Library";

const WebPlayer = ({ currPlayList, songInfo2 }) => {  

    return (
        <div className="web-player-container">
            <MediaPlayer songInfo2={songInfo2}/>
            <Library currPlayList={currPlayList}/>
        </div>
    ) 
}

export default WebPlayer;