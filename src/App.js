import React, {useState, useEffect} from "react";
import { Route, Switch }  from "react-router-dom";

import Login from "./components/login/Login";
import Player from "./components/player/Player";
function App() {
<<<<<<< Updated upstream
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
=======
 // const [user_id, setUserId] = useState(0);
  const [users, setUsers] = useState([]); //list of all users

    useEffect ( () => {
        const fetchData = async () => {
            const req = await fetch('http://localhost:4001/user/credentials/all');
            const res = await req.json();
            setUsers(res);
        }
        fetchData();
    }, [])




  return (
    <div>
      <Route exact path="/">
      <Login /*setUserId={setUserId} */ users={users} setUsers={setUsers}/>
      </Route>
      <Route exact path="/player">
        <Player /*userId={user_id}*//>
>>>>>>> Stashed changes
      </Route>
    </div>
  );
}

export default App;
