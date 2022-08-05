import React, {useState} from "react";
import { Route }  from "react-router-dom";

import Login from "./components/login/Login";
import Player from "./components/player/Player";
import UserInfo from './components/userinfo/UserInfo'

localStorage.setItem('userID', '2')


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
