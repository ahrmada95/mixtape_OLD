import { useState, useEffect } from "react"



const MediaSearch = ({ opt }) => {
const [songInfo3, setSongInfo3] = useState({})

    useEffect(() => {
        const fetchSong = async () => {
        let req = await fetch(`http://localhost:4001/music/1`)
        let res = await req.json()
        //console.log('Somethingelse', res)
        setSongInfo3(res)
        //setSongInfo()
    }
    fetchSong()
    }, [])

    if (!songInfo3) {return}
    return  (
        <p>{opt}</p>
    )
}

export default MediaSearch;