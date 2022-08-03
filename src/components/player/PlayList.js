import PlayListItem from "./PlayListItem";

const PlayList = ({playList, userPlayLists}) => {





    return (
        <div id="playlist-title"> Your Tapes
            <br/>
            <div className="playlist-items">
            <div id='add-new'>
                <img src='./assets/add_button.png' className="nav-icon-small"/> Create New
            </div>
        </div>
            {userPlayLists.playLists.map((playList, index) => {
                return <PlayListItem key={index} playList={playList}/>    
            })}
        </div>
    )
}

export default PlayList;