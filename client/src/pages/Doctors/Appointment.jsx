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

                        <span
                            className={`badge ${
                                docInfo?.available ? "bg-success" : "bg-danger"
                            }`}
                        >
                            {docInfo?.available ? "Available" : "Not Available"}
                        </span>
                    </div>
                    <div className="col-md-8 d-flex flex-column justify-content-center m=3">
                        <h6>Experience: {docInfo?.experience} Years</h6>
                        <h6>About Doctor :</h6>
                        <p>{docInfo?.about}</p>
                        <h5 className="text-success mt-3">
                            Consultation Fee : ₹{docInfo?.fee}
                        </h5>

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
                                minTime={new Date()}
                                maxTime={setHours(setMinutes(new Date(), 2), 22)}
                            />
                            <p>
                                Your Selected Booking:
                                {selectedDateTime ? selectedDateTime.toLocaleString() : "Please Select a Date & Time"}
                            </p>
                        </div>
                        
                        <button
                            className="btn btn-success mt-3 w-50"
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