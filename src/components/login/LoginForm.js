import React, {useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import './login.css'

const LoginForm = ({setUserId, setUserName}) => {
    const [users, setUsers] = useState([]); //list of all users
    
    const history = useHistory();


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
                setUserId(users[a]['id']); //set user id
                setUserName(users[a]['username'])
                return true;
            }
        }
        return false;
    }

    const handleLogIn = (event) => {
        event.preventDefault();
        const temp_usr_name = event.target['username'].value;
        const temp_usr_pass = event.target['password'].value;
        if (checkUser(temp_usr_name,temp_usr_pass)) {
            console.log('true')
            history.push(`/player`)
            //valid login, route with appropriate id 
        }else {
            alert('Invalid Username or Password');
            
        }
        event.target['username'].value = '';
        event.target['password'].value = '';
    }


    return (
        <div id="login-form">
            <form onSubmit={handleLogIn}>
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