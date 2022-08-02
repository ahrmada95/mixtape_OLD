import React, { useState } from "react";
import "./mediaplayer.css"

import MediaPlayer from "./MediaPlayer";
import Library from "./Library";

const WebPlayer = () => {
    return (
        <div className="web-player-container">
            <MediaPlayer/>
            {/* <MediaPlayer songId={songId} prevSong={prevSong} nextSong={nextSong}/> */}
            <Library />
        </div>
    )
}

export default WebPlayer;