import React, { useState } from 'react';
import './Authentication.css';
import { NavLink, useNavigate } from 'react-router';
import toast from 'react-hot-toast';

const Register = () => {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [password, setPassword] = useState("");

  // Optional
  const [address, setAddress] = useState("");
  const [emergencyContact, setEmergencyContact] = useState("");
  const [allergies, setAllergies] = useState("");
  const [diseases, setDiseases] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) =>{
    e.preventDefault();
    try{      
      console.log({
          name,
          dob,
          gender,
          phone,
          email,
          bloodGroup,
          password,
          address,
          emergencyContact,
          allergies,
          diseases
      });
      toast.success("Registered Successfully!");
      navigate("/login");
      setName("");
      setDob("");
      setGender("");
      setPhone("");
      setEmail("");
      setBloodGroup("");
      setPassword("");

      setAddress("");
      setEmergencyContact("");
      setAllergies("");
      setDiseases("");
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
                  placeholder='Full Name *'
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
              />
          </div>

          <div className='form-group mb-3'>
              <input
                  type='date'
                  value={dob}
                  onChange={(e)=>setDob(e.target.value)}
              />
          </div>

          <div className='form-group mb-3'>
              <select
                  value={gender}
                  onChange={(e)=>setGender(e.target.value)}
              >
                  <option value="">Select Gender *</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
              </select>
          </div>

          <div className='form-group mb-3'>
              <input
                  type='tel'
                  placeholder='Phone Number *'
                  maxLength={10}
                  value={phone}
                  onChange={(e)=>setPhone(e.target.value)}
              />
          </div>

          <div className='form-group mb-3'>
              <input
                  type='email'
                  placeholder='Email Address *'
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
              />
          </div>

          <div className='form-group mb-3'>
              <select
                  value={bloodGroup}
                  onChange={(e)=>setBloodGroup(e.target.value)}
              >
                  <option value="">Blood Group *</option>
                  <option>A+</option>
                  <option>A-</option>
                  <option>B+</option>
                  <option>B-</option>
                  <option>AB+</option>
                  <option>AB-</option>
                  <option>O+</option>
                  <option>O-</option>
              </select>
          </div>

          <div className='form-group mb-3'>
              <input
                  type='password'
                  placeholder='Password *'
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
              />
          </div>

          <hr/>

          <h5 className="optional-heading">Additional Medical Information</h5>

          <div className='form-group mb-3'>
              <textarea
                  rows="2"
                  placeholder='Address'
                  value={address}
                  onChange={(e)=>setAddress(e.target.value)}
              />
          </div>

          <div className='form-group mb-3'>
              <input
                  type='tel'
                  placeholder='Emergency Contact'
                  maxLength={10}
                  value={emergencyContact}
                  onChange={(e)=>setEmergencyContact(e.target.value)}
              />
          </div>

          <div className='form-group mb-3'>
              <textarea
                  rows="2"
                  placeholder='Allergies (if any)'
                  value={allergies}
                  onChange={(e)=>setAllergies(e.target.value)}
              />
          </div>

          <div className='form-group mb-3'>
              <textarea
                  rows="2"
                  placeholder='Existing Diseases / Medical Conditions'
                  value={diseases}
                  onChange={(e)=>setDiseases(e.target.value)}
              />
          </div>
          
          <button 
            className='btn Register-button' 
            disabled={
                !name ||
                !dob ||
                !gender ||
                !phone ||
                !email ||
                !bloodGroup ||
                !password
            }
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