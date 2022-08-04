import "./mediaplayer.css"
import "./media.css"
import PlayList from "./PlayList";
import { useState, useEffect } from "react";

const Media = ({ userPlayLists, setSongInfo2 }) => {

    const someOptions = ['a','b','c']
    const [search, setSearch] = useState('')
    const [collapse, setCollapse] = useState(false)
    const [songInfoAll, setSongInfoAll] = useState([])


    useEffect ( () => {
        const fetchAllong = async() => {
            const req = await fetch("http://localhost:4001/music/all");
            const res = await req.json(); 

            let val = []
            for(let i = 0; i < res.length; i++){
                val.push(res[i].name)
            }
            return setSongInfoAll(val)
        }
        fetchAllong()
    }, [])


    console.log(songInfoAll)


    const handleCollapse = () => {
        setCollapse((collapse) => !collapse)
        console.log(collapse)
    }

    const handleSearch = songInfoAll.filter((opt) => {
        if(search === '') {
            return false
        } else {
            return opt.includes(search)
        }
    })



    return (
        <div className="media-container">
            <div className="nav-container">
                <div id="library-option">
                    <img src='./assets/multi_mixtape_icon.png' className="nav-icon"/>
                    Library
                </div>
                <div id="search-option" onClick={handleCollapse}>
                    <img src='./assets/search_icon.png' className="nav-icon"/>
                    Search
                </div>
                <div>
                    {collapse ? null : <input type="text" placeholder="search" value={search} onChange={(e) => setSearch(e.target.value)}/>}
                    {handleSearch.map((opt, index) => {
                       return <p key={index}>{opt}</p>
                    })}
                </div>
            </div>
            <div className="var-container">
                <PlayList userPlayLists={userPlayLists} setSongInfo2={setSongInfo2}
                />
            </div>
        </div>
    );
}

export default Media;
