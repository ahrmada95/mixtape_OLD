import PlayListItem from "./PlayListItem";

const PlayList = ({ userPlayLists, setSongInfo2, setCurrPlayListId, setSongInfo3 }) => {





    return (
        <div id="playlist-title"> Your Tapes
            <br/>
            <div className="playlist-items">
            <div id='add-new'>
                <img src='./assets/add_button.png' className="nav-icon-small"/> Create New
            </div>
        </div>
            {userPlayLists.map((playList, index) => {
                return <PlayListItem key={index} 
                playList={playList} 
                setSongInfo2={setSongInfo2}
                setCurrPlayListId={setCurrPlayListId}
                setSongInfo3={setSongInfo3}
                />    
            })}
        </div>
    )
}

export default PlayList;