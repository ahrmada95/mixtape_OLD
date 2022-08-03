import React, {useState, useEffect} from 'react';
import './mediaplayer.css'

import WebPlayer from './WebPlayer';
import Media from './Media';
import UserPage from './UserPage';

const Player = ({userId_}) => { 
    const [userId, setUserId] = useState()
    const [currSong, setCurrSong] = useState(0);
    const [currPlayListId, setCurrPlayListId] = useState(0);
    const [currPlayList, setCurrPlayList] = useState(null);
    const [userPlayLists, setUserPlayLists] = useState([]);

    useEffect ( () => {
        const fetchPlayList = async() => {
            const req = await fetch("http://localhost:4001/playlist/5");
            const res = await req.json();
            setCurrPlayList(res);
            console.log(res);
        }
         const fetchPlayList2 = async() => {
            const req = await fetch(`http://localhost:4001/user/info/${userId_}`);
            const res = await req.json();
            setUserPlayLists(res);
            console.log(res);
        }
        fetchPlayList2();
        fetchPlayList();
    }, [])
     
    if (!currPlayList){
        return
    }


    //console.log('UserPlayLists: ', userPlayLists)




    return (
        <div className="body">
            <WebPlayer currPlayList={currPlayList}/>
            <Media userPlayLists={userPlayLists}/>
            <UserPage />
        </div>
    )
}

export default Player;