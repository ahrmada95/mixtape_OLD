import { useState, useEffect } from "react";
import PlayListItem from "./PlayListItem";

const PlayList = ({ userPlayLists, setSongInfo2, setCurrPlayListId, setSongInfo3 }) => {

    ///////////////////////////////////////////////////////////////////////////////
    //POST REQUEST
    const [playlisAll, setPLaylistAll] = useState([])
    const [collapseCreate, setCollapseCreate] = useState(true)

    useEffect(() => {
        const fetchPlaylistAll = async () => {
        let req = await fetch(`http://localhost:4001/playlist/all`)
        let res = await req.json()
        setPLaylistAll(res)
    }
    fetchPlaylistAll()
    
    },[])


    const [newList, setNewList] = useState({
        name: '',
        tracks: [''],
    }) 


    const addNewTrack = (newTrack) => {
    setPLaylistAll([...playlisAll, newTrack])
    }


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
        .then((data) => addNewTrack(data))
    }
    

    const handleOnChange = (e) => {
        setNewList({...newList, [e.target.name] : e.target.value})
        console.log('clicked')
    }


     const handleCollapseCreate = () => {
        setCollapseCreate((collapseCreate) => !collapseCreate)
        console.log(collapseCreate)
    }


    return (
        <div id="playlist-title"> Your Tapes
            <br/>
            <div className="playlist-items">
            <div id='add-new'>
                <img src='./assets/add_button.png' className="nav-icon-small" onClick={handleCollapseCreate}/> Create New
            </div>
            {collapseCreate ? null : <form>
                <input type="text" name="title" placeholder="your track title" className="userpage-button" onChange={handleOnChange}/>
                <input type="text" name="tracks" placeholder="add songs"  className="userpage-button" onChange={handleOnChange}/><br />
                <input type="submit" className="userpage-button" />
                </form>}
    
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