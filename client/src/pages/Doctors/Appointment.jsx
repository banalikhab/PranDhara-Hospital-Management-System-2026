import React, { useEffect, useState } from 'react';
import './AllDoctors.css';
import { useParams } from 'react-router';
import DoctorData from './DoctorsData.json';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { setHours,setMinutes } from "date-fns";


const Appointment = () => {
    const {id}=useParams()
    const[docInfo,setDocInfo]=useState({})
    const[selectedDateTime,setSelectedDateTime]=useState(new Date())

    //find doc
    const getDocInfo = async() => {
        let docInfo = DoctorData.find((doc) => doc.id == id);
        setDocInfo(docInfo);
        console.log(docInfo);
    };

    useEffect(() => {
        getDocInfo();
        //eslint-disable-next-line react-hooks/exhaustive-deps
    },[id])

    return (
        <>
            <div className='container docinfo-container'>
                <div className="row m-3">
                    <div className="col-md-3 d-flex flex-column justify-content-center align-items-center">
                        <img
                            src={docInfo?.pic}
                            alt="doctor"
                            className="doctor-profile"
                        />

                        <h4 className="mt-3">{docInfo?.name}</h4>

                        <p className="text-primary fw-bold">
                            {docInfo?.degree}
                        </p>

                        <p className="text-secondary">
                            <i className="fa-solid fa-hospital me-2"></i>
                            {docInfo?.hospital}
                        </p>

                        <span
                            className={`badge ${
                                docInfo?.available ? "bg-success" : "bg-danger"
                            }`}
                        >
                            {docInfo?.available ? "Available" : "Not Available"}
                        </span>

                        <div className="d-flex justify-content-center gap-4 mt-3">
                            <div>
                                <h6 className="mb-0 text-warning">
                                    ⭐ {docInfo?.rating}
                                </h6>
                                <small>Rating</small>
                            </div>

                            <div>
                                <h6 className="mb-0 text-primary">
                                    👥 {docInfo?.patients}+
                                </h6>
                                <small>Patients</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 d-flex flex-column justify-content-center m-3">
                        <h6>Experience: {docInfo?.experience} Years</h6>
                        <h6>About Doctor :</h6>
                        <p>{docInfo?.about}</p>
                        <h5 className="text-success mt-3">
                            Consultation Fee : ₹{docInfo?.fee}
                        </h5>
                        <div className="mt-3">
                            <h6>Available Days</h6>

                            <span className="badge bg-success me-2">Mon</span>
                            <span className="badge bg-success me-2">Tue</span>
                            <span className="badge bg-success me-2">Wed</span>
                            <span className="badge bg-success me-2">Thu</span>
                            <span className="badge bg-success">Fri</span>
                        </div>
                        <p className="text-muted">
                            <i className="fa-regular fa-clock me-2"></i>
                            Consultation Time: 30 Minutes (Maximum)
                        </p>

                        {/* date time */}
                        <div className="date-time mt-3">
                            <h6 className="date-time mt-3">Select your Booking Date & Time: 👇</h6>
                            <DatePicker 
                                className="calendar"
                                minDate={new Date()}
                                selected={selectedDateTime}
                                onChange={(date) => setSelectedDateTime(date)}
                                showTimeSelect
                                timeFormat="HH:mm aa"
                                timeIntervals={30}
                                dateFormat={"d-MMM-yyyy h:mm aa"}
                                timeCaption="Time"
                                minTime={setHours(setMinutes(new Date(),0),9)}
                                maxTime={setHours(setMinutes(new Date(),0),20)}                                
                            />
                            <p>
                                Your Selected Booking:
                                {selectedDateTime ? selectedDateTime.toLocaleString() : "Please Select a Date & Time"}
                            </p>

                            <div className="card mt-4 p-3 shadow-sm">
                                <h5>Booking Summary</h5>

                                <p><strong>Doctor:</strong> {docInfo?.name}</p>

                                <p><strong>Hospital:</strong> {docInfo?.hospital}</p>

                                <p><strong>Fee:</strong> ₹{docInfo?.fee}</p>

                                <p>
                                    <strong>Date & Time:</strong>{" "}
                                    {selectedDateTime
                                        ? selectedDateTime.toLocaleString()
                                        : "Not Selected"}
                                </p>
                            </div>
                        </div>
                        
                        <button
                            className="btn book-btn mt-3 w-50"
                            disabled={!docInfo?.available}
                        >
                            <i className="fa-solid fa-calendar-check me-2"></i>

                            {docInfo?.available
                                ? "Book Appointment"
                                : "Doctor Not Available"}
                        </button>   
                        
                    </div>                    
                </div>
            </div>
        </>
    )
}

export default Appointment