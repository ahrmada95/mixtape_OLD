import React, {useState, useEffect} from "react";
import { Route, Switch }  from "react-router-dom";

import Login from "./components/login/Login";
import Player from "./components/player/Player";

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
    </div>
  );
}

export default App;
