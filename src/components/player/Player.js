import './player.css'

import WebPlayer from './WebPlayer';
import Media from './Media';
import UserPage from './UserPage';


const Player = () => {
    return (
        <div className="body">
            <WebPlayer />
            <Media />
            <UserPage />
        </div>
    )
}

export default Player;