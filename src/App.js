import React, {useState} from "react";
import { Route }  from "react-router-dom";

import Login from "./components/login/Login";
import Player from "./components/player/Player";
import UserInfo from './components/userinfo/UserInfo'

let defaultSong = {
            "id": 1,
            "name": "Morning, Thinker",
            "album": "THE ANSWER - Armored Core Tribute Album",
            "albumArt": "./music/album_art/armored_core_tribute.jpg",
            "artist": "Mattias Häggström Gerdt",
            "time": 223000,
            "src": "./music/Morning, Thinker.mp3"
        }

localStorage.setItem('userID', '2')
localStorage.setItem('defaultSong_', JSON.stringify(defaultSong))


function App() {
  const [user_id, setUserId] = useState(0);
  const [userName, setUserName] = useState('') /* addition */


  const handleUserName = (name) => {
    setUserName(name)
  }



console.log(userName)

  return (
    <div>
      <Route exact path="/">
      <Login setUserId={setUserId} setUserName={handleUserName}/>
      </Route>
      <Route exact path="/player">
        <Player userId_={user_id} userName={userName}/>
      </Route>
      <Route exact path="/userinfo">
        <UserInfo userName={userName}/>
      </Route>
    </div>
  );
}

export default App;
