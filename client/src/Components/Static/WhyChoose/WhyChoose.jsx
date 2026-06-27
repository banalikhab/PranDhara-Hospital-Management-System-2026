import React from 'react';
import './WhyChoose.css';
import Image1 from '../../../assets/Images/Hospital/personalize.png';
import Image2 from '../../../assets/Images/Hospital/trust.png';
import Image3 from '../../../assets/Images/Hospital/empower.png';

const WhyChoose = () => {
  return (
    <>
        <h1 className='text-center mt-5'>Why Choose Us?</h1>
        <div className='row why-container'>
            <div className="col-lg-4 col-md-4 mb-4 d-flex">
                <div className="why-card">
                    <img src={Image1} alt="image1" className="why-img" />
                    <h2>Personalized Excellence</h2>
                    <p>
                        We believe every patient deserves individualized care. Our dedicated specialists combine advanced medical expertise, modern technology, and compassionate support to create personalized treatment plans that ensure comfort, confidence, and the best possible healthcare outcomes.
                    </p>
                </div>
            </div>

            <div className="col-lg-4 col-md-4 mb-4 d-flex">
                <div className="why-card">
                    <img src={Image2} alt="image2" className="why-img" />
                    <h2>Trusted Care</h2>
                    <p>
                        With experienced doctors, skilled healthcare professionals, and a patient-first approach, we deliver reliable medical services built on trust, safety, and transparency. Every diagnosis, treatment, and consultation is focused on providing quality care for every patient.
                    </p>
                </div>
            </div>

            <div className="col-lg-4 col-md-4 mb-4 d-flex">
                <div className="why-card">
                    <img src={Image3} alt="image3" className="why-img" />
                    <h2>Empowering Wellness Journey</h2>
                    <p>
                        From preventive health checkups to specialized treatments and recovery support, we guide you through every stage of your healthcare journey. Our goal is to promote healthier lifestyles, faster recovery, and long-term physical and emotional well-being.
                    </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default WhyChoose;