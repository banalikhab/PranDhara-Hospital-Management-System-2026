import React, {useState} from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-hot-toast';
import EditUserProfile from './EditUserProfile';
import './UserProfile.css';

const UserProfile = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    // Perform logout logic here (e.g., clear user session, redirect to login page)
    navigate('/login');
    toast.success('Logged out successfully');
  }

  return (
    <>
        <div className="container mt-5">
            <div className="user-container">
                <div className="row">
                    <h4 className="text-center">Manage Your Account & Appointment</h4>
                    <div className="col-md-3">
                        {/* <img src="" alt="userPic" className="card p-2" width={200}/> */}
                        <img
                            src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg"
                            alt="Profile"
                            className="card p-2 rounded-circle shadow-sm"
                            width={180}
                            height={180}
                        />
                    </div>
                    <div className="col-md-8 mt-3">
                        <div className="user-details mb-3">
                            {/* <h6>Name: </h6>
                            <h6>Gender: </h6>
                            <h6>DOB: </h6>
                            <h6>Phone: </h6>
                            <h6>Email: </h6>
                            <h6>Address: </h6> */}
                            <p><strong>Name:</strong> John Doe</p>
                            <p><strong>Gender:</strong> Male</p>
                            <p><strong>DOB:</strong> 01/01/2003</p>
                            <p><strong>Phone:</strong> 9876543210</p>
                            <p><strong>Email:</strong> abc@gmail.com</p>
                            <p><strong>Address:</strong> Kolkata</p>
                        </div>
                        {/* Buttons */}
                        <div className="button-container mt-5">
                            <button className="btn btn-warning me-2 mb-2" onClick={() => setIsOpen(!isOpen)}>
                                <i className="fa-regular fa-pen-to-square"></i> Edit Profile
                            </button>
                            <button className="btn btn-primary me-2 mb-2" onClick={() => navigate("/user/appointments")}>
                                <i className="fa-solid fa-list"></i> Appointments
                            </button>
                            <button className="btn btn-secondary me-2 mb-2">
                                <i className="fa-slab fa-regular fa-lock"></i> Change Password
                            </button>
                            <button className="btn btn-danger me-2 mb-2" onClick={handleLogout}>
                                <i className="fa-solid fa-power-off"></i> Logout
                            </button>
                        </div>
                    </div>
                </div>
            </div>           
        </div>
        {/* edit model */}
        {isOpen && (<EditUserProfile isOpen={isOpen} onClose={() => setIsOpen(false)}/>)}
    </>
  )
};

export default UserProfile