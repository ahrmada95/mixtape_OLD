import React, { useState, useEffect } from "react";
import "./mediaplayer.css"

import MediaPlayer from "./MediaPlayer";
import Library from "./Library";

const WebPlayer = ({currPlayList}) => {  

    return (
        <div className="web-player-container">
            <MediaPlayer />
            <Library currPlayList={currPlayList}/>
        </div>
    ) 
}

export default WebPlayer;