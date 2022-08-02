import React, {useState, useEffect} from "react";
import './login.css'

const LoginForm = () => {
    const [users, setUsers] = useState([]);

    useEffect ( () => {
        const fetchData = async () => {
            const req = await fetch('http://localhost:4001/user/credentials/all');
            const res = await req.json();
            setUsers(res);
        }
        fetchData();
    }, [])

    //verification function that is case sensitive
    const checkUser = (username, password) => {
        for (let a=0; a<users.length; a++){
            if(users[a]['username'] === username && users[a]['password'] === password){
                console.log('true');
                return true;
            }
        }
        return false;
    }






    return (
        <div id="login-form">
            <form>
                <label className="login-label-form">Username:</label>
                                                <br/> {/*Not ideal, but it'll have to do*/}
                <span>
                    <img src='./assets/user_icon_white_bg.png' className="login-icon"/>
                    <input type="text" className='login-placeholder-form' placeholder="Enter Username" name="username" id="user-box"/>
                </span>
                                                <br/>
                                                <br/>
                                                <br/>
                <label className="login-label-form">Password:</label>
                                                <br/> {/*Not ideal, but it'll have to do*/}
                <span>
                    <img src='./assets/password_icon.png' className="login-icon"/>
                    <input type="password" className='login-placeholder-form' placeholder="Enter Password" name="password" id="pass-box"/>
                </span>
                                                <br/>
                                                <br/>
                <input type="checkbox" id="remember-login" name="remember-login" value="Bike"/>
                <label htmlFor="vehicle1" id="remember-login"> Remember Me</label>
                                                <br/>
                <button type="submit" className="login-btn">Login</button>
            </form>
        </div>
    )
}

export default LoginForm;