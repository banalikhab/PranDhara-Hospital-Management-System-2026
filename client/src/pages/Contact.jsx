import React from 'react';
import ContactMessage from '../Components/Static/ContactMessage/ContactMessage.jsx';

const Contact = () => {
  return (
    <>
      <div className="d-flex mt-5 justify-content-center">
        <h6><i className="fa-solid fa-phone-volume ms-3"></i> Emergency Call: +91-1234567890</h6>
        <h6><i className="fa-solid fa-clock ms-3"></i> 10:00am to 10:00pm</h6>
        <h6><i className="fa-solid fa-envelope ms-3"></i> help@email.com</h6>
      </div>
      <ContactMessage/>
    </>
  )
}

export default Contact;