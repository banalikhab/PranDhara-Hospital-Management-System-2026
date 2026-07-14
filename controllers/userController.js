import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs";


//REGISTER
export const userRegister = async(req,res) => {
    try {
        const {name,email,password}=req.body
        //validation
        if(!name||!email||!password){
            return res.status(400).send({
                success:false,
                message:'Please Provide ALL Flields'
            })
        }
        //hashing
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        const userdata = {name, email, password:hashedPassword}
        //save user
        const newUser = new userModel(userdata)
        const user = await newUser.save()

        res.status(201).send({ 
            success:true,
            message:"Registered Succesfully",
            user,
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Something Went Wrong',
            error
        })
    }
}