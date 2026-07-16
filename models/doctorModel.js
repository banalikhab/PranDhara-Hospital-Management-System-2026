import mongoose from "mongoose";

const doctorSchema =new mongoose.Schema({
        name:{ type: String, required:[true, "Name is Required!"]},  
        about:{ type: String, required:[true, "About is Required!"]},  
        degree:{ type: String, required:[true, "Degree is Required!"]},  
        speciality:{ type: String, required:[true, "Speciality is Required!"]},  
        experience:{ type: String, required:[true, "Experience is Required!"]},  
        fees:{ type: Number, required:[true, "Fees is Required!"]},  
        email: { type: String, required: [true, "Email is Required"], unique:true},
        image: { type: String },
        phone: { type: String },
        address: { type: String },
        dob: { type: String },
        gender: { type: String },
        available: { type: Boolean, default: true }
    }, 
    {timestamps:true}
)

const doctorModel = mongoose.model('doctor',doctorSchema)

export default doctorModel