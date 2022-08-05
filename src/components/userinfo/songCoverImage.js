import { useState } from "react"

const SongCoverImage = ({ songCover }) => {

    const [flip, setFlip] = useState(false)

    const handleFlip = () => {
        setFlip((flip) => !flip)
        console.log(flip)
    }

    return (
       
            <img src={`${songCover.albumArt}`} alt="song cover" className="song-cover" onClick={handleFlip}/>
    
    )
}


export default SongCoverImage