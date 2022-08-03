
import { useEffect, useState } from "react"
import MediaPlayer from "./MediaPlayer"

const PlayListItemSong = ({ track, songInfo2, setSongInfo2 }) => {
    const [songName, setSongName] = useState('')
    const [songInfo, setSongInfo] = useState({})
    //const [songInfo2, setSongInfo2] = useState([])


    //console.log('What AM I', track)
    useEffect(() => {
        const fetchSongNames = async () => {
        let req = await fetch(`http://localhost:4001/music/${track}`)
        let res = await req.json()
        //console.log('Somethingelse', res)
        setSongName(res.name)
        setSongInfo(res)
        //setSongInfo()
    }
    fetchSongNames()
    }, [])

    if (!songName) {return}
    


    const handleMediaPlayer = () => {
        setSongInfo2(songInfo)
    }


    //console.log(songInfo)
    return (
        <div>
        <li onClick={handleMediaPlayer}>{songName}</li>
        </div>
    )
}



export default PlayListItemSong;