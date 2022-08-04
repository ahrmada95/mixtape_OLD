import "./media.css";
import { useState,useEffect } from "react";
import PlayListItemSong from "./PlayListItemSong";
import PlayList from "./PlayList";

const PlayListItem = ({ playList, setSongInfo2, setCurrPlayListId, setSongInfo }) => {


    const [playListName,setPlayListName] = useState([])
    const [playlistArray,setPlaylistArray] = useState([])
    const [collapseSongList, setCollapseSongList] = useState(true)

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

    const handlePlayListId = () => {
        setCurrPlayListId(playList)
    }
  

    //console.log(playListName)
    //console.log(playListName.tracks)
    return (
        <div className="playlist-items">
            <img src='./assets/tape_icon.png' className="nav-icon-tape" onClick={handleCollapse}/>
            <p onClick={handlePlayListId}>{playListName.name}</p>
            <ul>{collapseSongList ? null : playlistArray.map((track, index) => {
                   return <PlayListItemSong onClick={setCurrPlayListId}
                   key={index} track={track} setSongInfo2={setSongInfo2} setSongInfo={setSongInfo}
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