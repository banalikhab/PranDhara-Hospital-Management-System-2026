import React from 'react'
import './ShortIntro.css';
import ImageHos from '../../../assets/Images/Hospital/Hos.png';
const ShortIntro = () => {
  return (
    <div>
        <div className="intro-container">
            <div className='row'>
                <div className='col-md-6 img-container'>
                    <img src={ImageHos} alt='hosimage' className='hos-image'/>
                </div>
                
                <div className='col-md-6 info-container'>
                    <h1>PranDhara Hospital</h1>
                    <h5>A Super Speciality Hospital</h5>
                    <p className='font-style'>
                        PranDhara Hospital is committed to delivering compassionate, patient-centered healthcare through experienced doctors, advanced medical technology, and modern facilities. With a focus on excellence, safety, and trust, we provide comprehensive care that supports healthier lives and lasting well-being for every patient.
                    </p>
                    <p className='font-style'>
                        PranDhara Hospital combines expert medical care, modern facilities, and compassionate service to provide safe, reliable, and patient-focused healthcare, ensuring trust, comfort, and better health outcomes for every family.
                    </p>
                    <button className='btn appointment-btn'>Book an Appointment</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ShortIntro;