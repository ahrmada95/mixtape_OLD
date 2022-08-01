import React from "react";
//import css
import "./login.css";

import LoginVideo from "./LoginVideo";
import LoginForm from "./LoginForm";
import Forgot from "./Forgot";

const Login = () => {
    return (
        <div className="background">
            <LoginVideo />
            <div id="login-box">
                <div id="site-title">
                    <h1>Log into MixTape</h1>
                </div>
                <div id="login-area">
                    <LoginForm />
                    <Forgot />
                </div>
            </div>
        </div>
    )
}

export default Login;