import { useState } from "react";
import PlayListItem from "./PlayListItem";

const PlayList = ({ userPlayLists, setSongInfo2, setCurrPlayListId, setSongInfo3 }) => {


    const [newList, setNewList] = useState({
        name: '',
        tracks: '',
    })


    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:4001/playlist/all', {
            method: "POST",
            headers: {
                "Content-type" : "application/json"
            },
            body: JSON.stringify(newList)
        })
        .then(req => req.json())
        .then(data => console.log(data))
    }






    return (
        <div id="playlist-title"> Your Tapes
            <br/>
            <div className="playlist-items">
            <div id='add-new'>
                <img src='./assets/add_button.png' className="nav-icon-small"/> Create New
            </div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="your track title"/>
                <input type="text" name="tracks" placeholder="add songs"/><br />
                <input type="submit" />
                </form>
        </div>
            {userPlayLists.map((playList, index) => {
                return <PlayListItem key={index} 
                playList={playList} 
                setSongInfo2={setSongInfo2}
                setCurrPlayListId={setCurrPlayListId}
                setSongInfo3={setSongInfo3}
                />
            })}
        </div>
    )
}

export default PlayList;