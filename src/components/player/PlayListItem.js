import "./media.css";
import { useState,useEffect } from "react";
import PlayListItemSong from "./PlayListItemSong";

const PlayListItem = ({ playList }) => {


    const [playListName,setPlayListName] = useState([])
    const [playlistArray,setPlaylistArray] = useState([])

    useEffect(() => {
        const fetchPlayistNames = async () => {
        let req = await fetch(`http://localhost:4001/playlist/${playList}`)
        let res = await req.json()
        console.log('Somethingelse')
        setPlayListName(res)
        setPlaylistArray(res.tracks)
    }
    fetchPlayistNames()
    
    },[])
   


    console.log(playListName.tracks)
    return (
        <div className="playlist-items">
            <img src='./assets/tape_icon.png' className="nav-icon-tape"/>
            <p>{playListName.name}</p>
            <ul>
                {playlistArray.map((track, index) => {
                   return <PlayListItemSong key={index} track={track}/>
                })}
                
            </ul>
        </div>
    )
}

export default PlayListItem;