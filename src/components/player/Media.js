import "./mediaplayer.css"
import "./media.css"
import PlayList from "./PlayList";

const Media = ({ userPlayLists, setSongInfo2, songInfo2}) => {




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
                <PlayList userPlayLists={userPlayLists}
                songInfo2={songInfo2} setSongInfo2={setSongInfo2}
                />
            </div>
        </div>
    );
}

export default Media;
