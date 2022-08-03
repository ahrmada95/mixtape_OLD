import React, {useState} from "react";
import { Route, Switch }  from "react-router-dom";

import Login from "./components/login/Login";
import Player from "./components/player/Player";
function App() {
  const [user_id, setUserId] = useState(0);

  const handleId = (id) => {
    setUserId(id);
  }
  return (
    <div>
      <Route exact path="/">
      <Login setUserId={setUserId}/>
      </Route>
      <Route exact path="/player">
        <Player userId_={user_id}/>
      </Route>
    </div>
  );
}

export default App;
