import doctorModel from "../models/doctorModel.js"


//add doctor
export const addDoctor = async (req,res) => {
    try {
        const{name,email,degree,fees,about,gender,phone,address, speciality,experience,dob} = req.body
        if( !name || !email || !degree || !fees || !about || !gender || !phone || !address || !speciality ||!experience || !dob ||!req.file){
            return res.status(400).send({
                success:false,
                message:'Please Provide All Fields!'
            })
        }
        const photoBase64 = req.file.buffer.toString('base64')
        // const photoBase64 = req.file && req.file.buffer.toString('base64')
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