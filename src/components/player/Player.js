import React, {useState, useEffect} from 'react';
import './mediaplayer.css'

import WebPlayer from './WebPlayer';
import Media from './Media';
import UserPage from './UserPage';

const Player = () => { 
    const [currSong, setCurrSong] = useState(0);
    const [currPlayList, setCurrPlayList] = useState(null);
    const [userPlayLists, setUserPlayLists] = useState([]);

    useEffect ( () => {
        const fetchPlayList = async() => {
            const req = await fetch("http://localhost:4001/playlist/1");
            const res = await req.json();
            setCurrPlayList(res);
            console.log(res);
        }
        fetchPlayList();
    }, [])
     
    if (!currPlayList){
        return
    }
    
    return (
        <div className="body">
            <WebPlayer currPlayList={currPlayList}/>
            <Media />
            <UserPage />
        </div>
    )
}

export default Player;