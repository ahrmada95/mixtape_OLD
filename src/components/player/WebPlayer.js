import "./player.css"

import MediaPlayer from "./MediaPlayer";
import Library from "./Library";

const WebPlayer = () => {
    return (
        <div className="web-player-container">
            <MediaPlayer />
            <Library />
        </div>
    )
}

export default WebPlayer;