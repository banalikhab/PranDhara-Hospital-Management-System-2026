import React from 'react'
import ReviewData from './PatientReviews.json'
import './PatientReviews.css'

const PatientReviews = () => {
  return (
    <>
        <div className="review-container">
            <div className="heading-container">

                <h1 className="review-title">
                What Our Patients
                <br />
                Say About Us
                </h1>

                <div className="heading-line"></div>
            </div>

            <div className="container mt-5">
                <div className="row justify-content-center g-4">

                {ReviewData.map((d) => (

                    <div className="col-lg-4 col-md-6" key={d.id}>

                    <div className="review-card">

                        <img
                        src={d.pic}
                        alt={d.name}
                        className="profile-img"
                        />

                        <div className="quote-icon">
                        <i className="fas fa-quote-right"></i>
                        </div>

                        <div className="stars">
                        {[...Array(d.rating)].map((_, i) => (
                            <i key={i} className="fas fa-star"></i>
                        ))}
                        </div>

                        <h5>{d.commentTitle}</h5>

                        <p className="review-text">
                        {d.commentDescription}
                        </p>

                        <hr />

                        <h6>{d.name}</h6>

                        <small>{d.address}</small>

                    </div>

                    </div>

                ))}

                </div>
            </div>
        </div>
    </>
  )
}

export default PatientReviews