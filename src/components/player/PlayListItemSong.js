
import { useEffect, useState } from "react"

const PlayListItemSong = ({ track }) => {
    const [songName, setSongName] = useState('')

    console.log('What AM I', track)
    useEffect(() => {
        const fetchSongNames = async () => {
        let req = await fetch(`http://localhost:4001/music/${track}`)
        let res = await req.json()
        //console.log('Somethingelse', res)
        setSongName(res.name)
    }
    fetchSongNames()
    }, [])

    if (!songName) {return}
    
    return (
        <li>{songName}</li>
    )
}



export default PlayListItemSong;