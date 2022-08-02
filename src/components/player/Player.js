import React, {useState} from 'react';
import './mediaplayer.css'

import WebPlayer from './WebPlayer';
import Media from './Media';
import UserPage from './UserPage';


const Player = () => {
    const [currSongId, setCurrSongId] = useState(0);
    const [currPlayList, setCurrPlaylist] = useState({})

    const changePlayList = (id) => {

    }

    return (
        <div className="body">
            <WebPlayer />
            <Media />
            <UserPage />
        </div>
    )
}

export default Player;