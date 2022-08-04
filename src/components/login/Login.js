import React, {useState} from "react";
//import css
import "./login.css";

import LoginVideo from "./LoginVideo";
import LoginForm from "./LoginForm";
import Forgot from "./Forgot";

const Login = ({setUserId, setUserName}) => {
    console.log(localStorage.getItem('userID'))

    return (
        <div className="background">
            <LoginVideo />
            <div id="login-box">
                <div id="site-title">
                    <h1>Log into MixTape</h1>
                </div>
                <div id="login-area">
                    <LoginForm setUserId={setUserId} setUserName={setUserName}/>
                    <Forgot />
                </div>
            </div>
        </div>
    )
}

export default Login;