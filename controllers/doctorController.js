import doctorModel from "../models/doctorModel.js"


//Add doctor
export const addDoctor = async (req,res) => {
    try {
        const{name,email,degree,fees,about,gender,phone,address, speciality,experience,dob,image} = req.body
        if( !name || !email || !degree || !fees || !about || !gender || !phone || !address || !speciality ||!experience || !dob){
            return res.status(500).send({
                success:false,
                message:'Please Provide All Fields!'
            })
        }
        // const photoBase64 = req.file.buffer.toString('base64')
        const photoBase64 = req.file && req.file.buffer.toString('base64')
        const doctorData = {name,email,degree,fees,about,gender,phone,address,image:photoBase64,speciality,experience,dob}
        const doctor = new doctorModel(doctorData)
        await doctor.save()

        res.status(201).send({
            success:true,
            message:'Doctor Created',
            doctor
        })


    } catch (error) {
        console.log(error)
        res.status(500).send({
            succes:false,
            message: 'Error in Adding Doctor API'
        })
        
    }
}

//Get All Doctor
export const getAllDoctor = async (req,res) => {
    try {
        const doctors = await doctorModel.find({})
        res.status(200).send({
            sucess:true,
            message:'All Doctors List',
            totalCount: doctors.length,
            doctors
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            succes:false,
            message: 'Error in Getting All Doctor API'
        })
    }
}


//Get Doctor Details
export const getDoctorDetails = async (req,res) => {
    try {
        const {id} =req.params
        if(!id){
            return res.status(404).send({
                success:false,
                message:'Please Add Doctor ID'
            })
        }
        //find Doctor
        const doctor = await doctorModel.findById(id)
        if(!doctor){
            return res.status(404).send({
                success:false,
                message:'No Doctor Found with this ID'
            })
        }
        res.status(200).send({
            sucess:true,
            message:'Details Fetched Successfully',
            doctor
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            succes:false,
            message: 'Error in Getting Doctor Details API'
        })
    }
}


//update doctor
export const updateDoctor = async (req, res) => {
    try {
        const {id} =req.params
        if(!id){
            return res.status(404).send({
                success:false,
                message:'Please Add Doctor ID'
            })
        }
        const data = req.body
        const photoBase64 = req.file && req.file.buffer.toString('base64')
        const doctor = await doctorModel.findByIdAndUpdate(id,
            {$set:data},
            {returnOriginal:false})
        res.status(200).send({
            sucess:true,
            message:'Doctor Details Updated',
            doctor
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            succes:false,
            message: 'Error in Updating Doctor Details API'
        })
    }
}