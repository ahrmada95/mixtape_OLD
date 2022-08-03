import PlayListItem from "./PlayListItem";

const PlayList = ({userPlayLists, setSongInfo2}) => {





    return (
        <div id="playlist-title"> Your Tapes
            <br/>
            <div className="playlist-items">
            <div id='add-new'>
                <img src='./assets/add_button.png' className="nav-icon-small"/> Create New
            </div>
        </div>
            {userPlayLists.map((playList, index) => {
                return <PlayListItem key={index} playList={playList} setSongInfo2={setSongInfo2}
                />    
            })}
        </div>
    )
}

export default PlayList;