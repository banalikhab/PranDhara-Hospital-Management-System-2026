import React from 'react';
import  AllDoctorsData from './DoctorsData.json';
import './AllDoctors.css';

import { NavLink } from "react-router";

const AllDoctors = () => {
  return (
    <>
        <div className="container py-4 doc-container">
            <h3 className="text-center text-success fw-bold mb-4">
                👨‍⚕️ Select a Doctor & Book Your Appointment
            </h3>

            <div className="row justify-content-center g-4">
                {AllDoctorsData.map((d) => (
                    <div className="col-lg-3 col-md-4 col-sm-6" key={d.id} className="text-decoration-none text-dark">
                        <div className={`card doctor-card h-100 shadow-sm ${
                                !d.available ? "opacity-50" : ""
                            }`}>

                            {/* <NavLink to={`/doctors/${d.id}`}>
                                <img
                                    src={d.pic}
                                    alt={d.name}
                                    className="card-img-top doctor-img"
                                />

                                <div className="card-body text-center">

                                    <h5>{d.name}</h5>

                                    <p className="text-muted mb-1">
                                        {d.degree}
                                    </p>

                                    <span className="badge bg-info text-dark">
                                        <i className={`${d.icon} me-2`}></i>
                                        {d.speciality}
                                    </span>

                                </div>

                                <div className="card-footer bg-white border-0 text-center">

                                    <small
                                        className={
                                            d.available
                                                ? "text-success"
                                                : "text-danger"
                                        }
                                    >
                                        ● {d.available ? "Available Today" : "Unavailable"}
                                    </small>

                                </div>
                            </NavLink> */}

                            <NavLink
                                to={d.available ? `/doctors/${d.id}` : "#"}
                                className={`text-decoration-none text-dark ${
                                    !d.available ? "disabled" : ""
                                }`}
                                onClick={(e) => {
                                    if (!d.available) {
                                        e.preventDefault();
                                    }
                                }}
                            >
                                <img
                                    src={d.pic}
                                    alt={d.name}
                                    className="card-img-top doctor-img"
                                />

                                <div className="card-body text-center">

                                    <h5>{d.name}</h5>

                                    <p className="text-muted mb-1">
                                        {d.degree}
                                    </p>

                                    <span className="badge bg-info text-dark">
                                        <i className={`${d.icon} me-2`}></i>
                                        {d.speciality}
                                    </span>

                                </div>

                                <div className="card-footer bg-white border-0 text-center">
                                    <small
                                        className={
                                            d.available
                                                ? "text-success"
                                                : "text-danger"
                                        }
                                    >
                                        ● {d.available ? "Available Today" : "Unavailable"}
                                    </small>
                                </div>
                            </NavLink>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
  )
}

export default AllDoctors