import './userinfo.css'
import SongCoverImage from './songCoverImage'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

const UserInfo = ({ userName }) => {

    const history = useHistory()

    const [songsInfo, setSongsInfo] = useState([])

     useEffect ( () => {
        const fetchUrlSongCovers = async() => {
            const req = await fetch(`http://localhost:4001/music/all`);
            const res = await req.json();
            
            
            let val = []
            for(let i = 10; i < 30; i++){
                val.push(res[i])
            }
            return setSongsInfo(val)
        }
        fetchUrlSongCovers()
    },[])
    console.log(songsInfo);

    return(
        <div className='userinfo-container'>
            <div className='user-song-covers'>
                {songsInfo.map((songCover, index) => {
                    return <SongCoverImage key={index} songCover={songCover} />
                })}
            </div>
            <div className="user-info">
                <div className='user-info-name'>
                    <h3>{userName}</h3>
                </div>
                <div className='user-info-img-container'>
                    <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" className='user-info-img'/>
                </div>
                <div className='playlist'>
                    Create Playlist
                </div>
                <div className='user-ingo-logout'>
                    <button onClick={() => history.push('/')} className="logout-btn">Logout</button>
                </div>
            </div>
        </div>
    )
}


export default UserInfo