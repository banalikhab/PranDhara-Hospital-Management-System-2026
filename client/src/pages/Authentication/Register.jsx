import React, { useState } from 'react';
import './Authentication.css';
import { NavLink, useNavigate } from 'react-router';
import toast from 'react-hot-toast';

const Register = () => {
  const [name,setName]= useState("");
  const [email,setEmail]= useState("");
  const [password,setPassword]= useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) =>{
    e.preventDefault();
    try{      
      console.log("register ==> ",name, email, password);
      toast.success("Registered Successfully!");
      navigate("/login");
      setName("");
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
          <h2>Create an Account</h2>
          <p>Please enter your details to Register</p>
          {/* <div className="input-group mb-3">
              <span className="input-group-text">
                  <i className="bi bi-envelope"></i>
              </span>

              <input
              type='text'
              placeholder='Enter your Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              />
          </div> */}
          <div className='form-group mb-3'>
            <input
            type='text'
            placeholder='Enter your Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
          </div>
          
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
            disabled={!name||!email||!password}
            onClick={handleSubmit}
          >
            REGISTER
          </button>
          <p className='mt-3'>
            {" "}
            Already A User? <NavLink to="/login">Login Here!</NavLink> 
          </p>
        </div>
      </div>        
    </>
  )
}

export default Register