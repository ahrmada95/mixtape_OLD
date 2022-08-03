import React, {useState} from "react";
//import css
import "./login.css";

import LoginVideo from "./LoginVideo";
import LoginForm from "./LoginForm";
import Forgot from "./Forgot";

<<<<<<< Updated upstream
const Login = ({setUserId, setUserName}) => {
=======
const Login = ({users, setUsers}) => {
>>>>>>> Stashed changes
    return (
        <div className="background">
            <LoginVideo />
            <div id="login-box">
                <div id="site-title">
                    <h1>Log into MixTape</h1>
                </div>
                <div id="login-area">
<<<<<<< Updated upstream
                    <LoginForm setUserId={setUserId} setUserName={setUserName}/>
=======
                    <LoginForm /*setUserId={setUserId}*/ users={users} setUsers={setUsers}/>
>>>>>>> Stashed changes
                    <Forgot />
                </div>
            </div>
        </div>
    )
}

export default Login;