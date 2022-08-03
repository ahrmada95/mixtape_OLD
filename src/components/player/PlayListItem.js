import "./media.css";
import { useState,useEffect } from "react";

const PlayListItem = ({ playList }) => {


    const [playListName,setPlayListName] = useState([])

    useEffect(() => {
        const fetchPlayistNames = async () => {
        let req = await fetch(`http://localhost:4001/playlist/${playList}`)
        let res = await req.json()
        setPlayListName(res)
    }
    fetchPlayistNames()
    },[])
   


    console.log(playListName.tracks)
    return (
        <div className="playlist-items">
            <img src='./assets/tape_icon.png' className="nav-icon-tape"/>
            <p>{playListName.name}</p>
            <ul>
                {/*playListName.tracks.map((track, index) => {
                   return <li key={index}>{track}</li>
                })*/}
                
            </ul>
        </div>
    )
}

export default PlayListItem;