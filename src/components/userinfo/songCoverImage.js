import { useState } from "react"
import { useHistory } from "react-router-dom"


const SongCoverImage = ({ songCover }) => {
    const history = useHistory()
    const [flip, setFlip] = useState(false)

    const handleFlip = () => {
        setFlip((flip) => !flip)
        //console.log(flip)
    }

    return (
        <div>
            <img src={`${songCover.albumArt}`} alt="song cover" className="song-cover" 
            onClick={() => {handleFlip(); history.push('/player') }} />
        </div>
            
    
    )
}


export default SongCoverImage