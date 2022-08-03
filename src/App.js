import React, {useState} from "react";
import { Route, Switch }  from "react-router-dom";

import Login from "./components/login/Login";
import Player from "./components/player/Player";
function App() {
  const [user_id, setUserId] = useState(0);
  const [userName, setUserName] = useState('') /* addition */

  const handleId = (id) => {
    setUserId(id);
  }

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
        <Player userId={user_id} userName={userName}/>
      </Route>
    </div>
  );
}

export default App;
