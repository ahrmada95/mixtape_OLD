import "./mediaplayer.css"
import "./media.css"

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
            <div className="var-container"></div>
        </div>
    );
}

export default Media;
