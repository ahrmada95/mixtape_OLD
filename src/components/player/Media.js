import "./mediaplayer.css"
import "./media.css"

const playlistItem = () => {
    return (

        <div> </div>
    )
} 

const Media = () => {
    return (
        <div className="media-container">
            <div className="nav-container">
                <div id="library-option">
                    <img src='./assets/multi_mixtape_icon.png' className="nav-icon"/>
                    Library
                </div>
                <div id="search-option">
                    <img src='./assets/search_icon.png' className="nav-icon"/>
                    Search
                </div>
            </div>
            <div className="var-container">
                <div id="playlist-title">
                    Playlists
                    <br/>
                    <div id="playlist-items">
                        <div id='add-new'>
                            <img src='./assets/add_button.png' className="nav-icon-small"/>
                            Create New
                        </div>
                       
                        {playlistItem()}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Media;
