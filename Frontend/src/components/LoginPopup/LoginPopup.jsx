import React, { useState } from 'react'
import './LoginPopup.css'
import { Navigate, useNavigate } from 'react-router-dom'
import { assets } from '../../assets/assets'
const LoginPopup = ({setShowLogin}) => {
    const[currState,setCurrState]=useState("Sign Up");
    const navigate = useNavigate();
  return (
    <div className='login-popup'>
      <from className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-input">
            {currState==="Login"?<></>:<input type="text" placeholder='Your name' required/>}
            <input type="email" placeholder='Your email' required/>
            <input type="password" placeholder='Password' required/>
        </div>
        { <span className='forgot' onClick={()=>navigate('/forgot-password')}>Forgot password</span>
  }
        
        <button>{currState==="Sign Up"?"Create account":"Login"}</button>
        <div className="login-popup-condition">
            <input type="checkbox" required/>
            <p>By continuing, i agree to the terms of use & privacy policy</p>

        </div>
        {currState==="Login"
        ?<p>Create new account?<span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>
        :<p>Alraedy have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>
  }
      </from>
    </div>
  )
}

export default LoginPopup
