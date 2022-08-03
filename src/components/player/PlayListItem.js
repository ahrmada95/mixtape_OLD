import "./media.css";
import { useState,useEffect } from "react";
import PlayListItemSong from "./PlayListItemSong";

const PlayListItem = ({ playList, songInfo2, setSongInfo2 }) => {


    const [playListName,setPlayListName] = useState([])
    const [playlistArray,setPlaylistArray] = useState([])
    const [collapseSongList, setCollapseSongList] = useState(false)

    useEffect(() => {
        const fetchPlayistNames = async () => {
        let req = await fetch(`http://localhost:4001/playlist/${playList}`)
        let res = await req.json()
        //console.log('Somethingelse')
        setPlayListName(res)
        setPlaylistArray(res.tracks)
    }
    fetchPlayistNames()
    
    },[])
   
    const handleCollapse = () => {
        setCollapseSongList((collapseSongList) => !collapseSongList)
    }



    //console.log(playListName)
    //console.log(playListName.tracks)
    return (
        <div className="playlist-items">
            <img src='./assets/tape_icon.png' className="nav-icon-tape"/>
            <p onClick={handleCollapse}>{playListName.name}</p>
            <ul>{collapseSongList ? null : playlistArray.map((track, index) => {
                   return <PlayListItemSong key={index} track={track}
                   songInfo2={songInfo2} setSongInfo2={setSongInfo2}
                   />
                })}
                {/*playlistArray.map((track, index) => {
                   return <PlayListItemSong key={index} track={track}/>
                })*/}
                
            </ul>
        </div>
    )
}

export default PlayListItem;