import React, {useState} from "react";
import '../App.css';
import { FaInstagramSquare } from "react-icons/fa";
// import appStore from "../assets/appStore.png";
import facebook from "../assets/facebook.webp";
import instaFont from "../assets/instaFont.png";
import appleStore from "../assets/appleStore.png";
// import googlePlay from "../assets/googlePlay.svg";


const Login =() => {

    const [username, setUsername] = useState("");
    const[Password, setPassword] = useState("");

    const loginHandler = () => {
        alert(`Username: ${username} Password: ${Password}`);
    }
    return(
        <div className="login-container">
        
        
        <div className="box1">
        
        <div className="box1-logo">
        <img src={instaFont} alt="" className="instaFont" />
        
        
        
        </div>
        
        <div className="inputBox">
        <input type="text" 
        placeholder="Phone number, username, or email" 
        value={username}
        onChange={(e) => setUsername(e.target.value)}/>
        <div/>
        
        <div className="inputBox">
        <input type="text" placeholder="Password" 
        value={Password}
        onChange={(e) => setPassword(e.target.value)}/>
        </div>
        
        <div className="loginButton">
        <button className="login"
        onClick={loginHandler}>Login</button>
        </div>

        <div className="line">
            <div className="line1"></div>
            <div className="or">or</div>
            <div className="line2"></div>
        </div>

        <div className="fb">
            <span>
            <img src={facebook} alt="" className="facebook"/>
            </span>
            <p className="fbText">Log in with Facebook</p>
        </div>

        <div className="forgotPassword">
        <a href="">Forgot Password?</a>
       

        </div>

        </div>


        <div className="box2">
        <p>Don't have an account? 
       <a href="signup">
       Sign up
       </a>
        </p>
        </div>

        <div className="box3">
        <p>Get the app</p>
        </div>

        <div className="box4">
            <img src={appleStore} alt="" className="appleStore"/>
            {/* <img src={googlePlay} alt="" className="googlePlay"/> */}
           


            {/* <img src={googlePlay} alt="" /> */}
            </div>
            </div>
            
            </div>
        );
    }
    export default Login 