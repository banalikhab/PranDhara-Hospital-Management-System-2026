import React from 'react';
import './User.css';
const EditUserProfile = ({isOpen, onClose}) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="editModel modal d-block" tabIndex={-1}>
        <div className="modal-dialog modal-dialog-centered">
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
                {/* <input type="file" className="form-control"/> */}
                <label className="form-label mt-2">
                  Profile Picture
                  </label>
                  <input
                  type="file"
                  className="form-control"
                  />
                <input type="text" placeholder="Enter your name" className="form-control"/>
                <div className="d-flex flex-row">
                  <select className="form-select m-1">
                    <option value={'male'}>Male</option>
                    <option value={'female'}>Female</option>
                  </select>
                  <input type="date" placeholder='dob' className="form-control"/>
                </div>
                <input type="text" placeholder='Phone Number' className="form-control"/>
                <input type="text" placeholder='Address' className="form-control"/>
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