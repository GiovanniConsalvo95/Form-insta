import React from "react";
import '../App.css';
import { FaInstagramSquare } from "react-icons/fa";
// import appStore from "../assets/appStore.png";
import facebook from "../assets/facebook.webp";
import instaFont from "../assets/instaFont.png";
import appleStore from "../assets/appleStore.png";
// import googlePlay from "../assets/googlePlay.svg";


const Login =() => {
    return(
        <div className="login-container">
        
        
        <div className="box1">
        
        <div className="box1-logo">
        <img src={instaFont} alt="" className="instaFont" />
        {/* <FaInstagramSquare /> */}
        
        
        </div>
        
        <div className="inputBox">
        <input type="text" 
        placeholder="Phone number, username, or email" />
        <div/>
        
        <div className="inputBox">
        <input type="text" placeholder="Password" />
        </div>
        
        <div className="loginButton">
        <button className="login">Login</button>
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
            <p>Log in with Facebook</p>
        </div>
        <div className="forgotPassword">
        <p>Forgot Password?</p>
        </div>
        </div>


        <div className="box2">
        <p>Don't have an account?
        <span className="signUp">
        Sign up
        </span>
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