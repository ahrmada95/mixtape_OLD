import Login from "./Login"
import "./login.css"

const LoginVideo = () => {
    return (
        <div id="login-attract-mode">
            <video autoPlay muted loop id='login-video'>
                <source src='./assets/particles.mp4'/>
            </video>
        </div>
    )
}

export default LoginVideo