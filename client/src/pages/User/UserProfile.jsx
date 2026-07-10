import React from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-hot-toast';


const UserProfile = () => {
  const navigate = useNavigate();

  
  const handleLogout = () => {
    // Perform logout logic here (e.g., clear user session, redirect to login page)
    navigate('/login');
    toast.success('Logged out successfully');
  }

  return (
    <>
        <div className="container mt-5">
            <div className="row">
                <h4 className="text-center">Manage Your Account & Appointment</h4>
                <div className="col-md-3">
                    <img src="" alt="userPic" className="card p-2" width={200}/>
                </div>
                <div className="col-md-8 mt-3">
                    <div className="user-containr mb-3">
                        <h6>Name: </h6>
                        <h6>Gender: </h6>
                        <h6>DOB: </h6>
                        <h6>Phone: </h6>
                        <h6>Email: </h6>
                        <h6>Address: </h6>
                    </div>
                    {/* Buttons */}
                    <div className="button-container mt-5">
                        <button className="btn btn-warning ms-3"><i className="fa-regular fa-pen-to-square"></i> Edit Profile</button>
                        <button className="btn btn-primary ms-3"><i class="fa-solid fa-list"></i> Appointments</button>
                        <button className="btn btn-secondary ms-3"><i class="fa-slab fa-regular fa-lock"></i> Change Password</button>
                        <button className="btn btn-danger ms-3" onClick={handleLogout}><i class="fa-solid fa-power-off"></i> Logout</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
};

export default UserProfile