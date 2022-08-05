import { useState } from "react"
import { useHistory } from "react-router-dom"


const SongCoverImage = ({ songCover }) => {
    const history = useHistory()
    const [flip, setFlip] = useState(true)

    const handleFlip = () => {
        setFlip((flip) => !flip)
        //console.log(flip)
    }

    return (
        <div className="test">{flip ? <img src={`${songCover.albumArt}`} alt="song cover" className="song-cover" 
            onClick={() => {handleFlip(); /*history.push('/player') */}} /> : <div className="player-bg">
               
                    <span onClick={handleFlip}>
                        <button className='prev-btn' >◄◄</button>
                        <button className='play-btn' >►</button> {/*we will use state to change class and content dynamically*/}
                        <button className='next-btn' >►►</button>
                    </span>
                </div>}
            
        </div>
            
    
    )
}


export default SongCoverImage