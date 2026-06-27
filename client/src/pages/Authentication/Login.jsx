import React, { useState } from 'react';
import './Authentication.css';
import { NavLink, useNavigate } from 'react-router';
import toast from 'react-hot-toast';

const Login = () => {
  const [email,setEmail]= useState("");
  const [password,setPassword]= useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) =>{
    e.preventDefault();
    try{      
      console.log("login ==> ", email, password);
      toast.success("Login Successfull!");
      navigate("/profile");
      setEmail("");
      setPassword("");
    }
    catch(error){
      console.log(error);
      toast.error(error);
    }
  }

  return (
    <>
      <div className="auth-container">
        <div className='card'>
          <h2>Login to Your Account</h2>
          <p>Please enter your Email & Password</p>
                    
          <div className='form-group mb-3'>
            <input
            type='email'
            placeholder='Enter your Email Address'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className='form-group mb-3'>
            <input
            type='password'
            placeholder='Enter your Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button 
            className='btn Register-button' 
            disabled={!email||!password}
            onClick={handleSubmit}
          >
            REGISTER
          </button>
          <p className='mt-3'>
            {" "}
            Not A User? <NavLink to="/register">Register Here!</NavLink> 
          </p>
        </div>
      </div>        
    </>
  )
}

export default Login