import { Route, Switch }  from "react-router-dom";

import Login from "./components/login/Login";
import Player from "./components/player/Player";
function App() {
  return (
    <div>
      <Route exact path="/">
        <Login />
      </Route>
      <Route exact path="/player">
        <Player />
      </Route>
    </div>
  );
}

export default App;
