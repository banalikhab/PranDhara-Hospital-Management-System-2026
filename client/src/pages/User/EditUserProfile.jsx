import React from 'react';
import './User.css';
const EditUserProfile = ({isOpen, onClose}) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="editModel modal d-block" tabIndex={-1}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Your Profile</h5>
              <button 
                type="button" 
                className="btn-close" 
                data-bs-dismiss="modal" 
                aria-label="Close" 
                onClick={onClose}
              />
            </div>
            <div className="modal-body">
              <div className="mod-details d-flex flex-column">
                <img src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg" alt="userPic" height={80} width={100}/>
                <input type="file" />''
                <input type="text" placeholder="Enter your name"/>
                <div className="d-flex flex-row">
                  <select className="m-1">
                    <option value={'male'}>Male</option>
                    <option value={'female'}>Female</option>
                  </select>
                  <input type="date" placeholder='dob'/>
                </div>
                <input type="text" placeholder='phone'/>
                <input type="text" placeholder='address'/>
              </div>
            </div>
            <div className="modal-footer">
              <button 
                type="button" 
                className="btn btn-secondary" 
                data-bs-dismiss="modal"
                onClick={onClose}
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditUserProfile