import PlayListItem from "./PlayListItem";

const PlayList = () => {
    return (
        <div id="playlist-title"> Playlists
            <br/>
            <div className="playlist-items">
            <div id='add-new'>
                <img src='./assets/add_button.png' className="nav-icon-small"/> Create New
            </div>
        </div>
            <PlayListItem />
        </div>
    )
}

export default PlayList;