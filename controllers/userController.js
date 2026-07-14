import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs";
import JWT from 'jsonwebtoken';

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


// LOGIN
export const userLogin = async (req,res) => {
    try {
        const {email, password} = req.body
        //validation
        if(!email||!password){
            return res.status(400).send({
                success:false,
                message:'Please add email or password'
            })
        }
        //find user
        const user = await userModel.findOne({email})
        if(!user){
            return res.status(404).send({
                success:false,
                message:'User Not Found'
            })
        }
        // match password
        const isMatch = await bcrypt.compare(password,user?.password)
        if(!isMatch){
            return res,status(402).send({
                success:false,
                message:'Invalid Credential'
            })
        }

        //token
        const token = JWT.sign({id:user?.id}, process.env.JWT_SECRET, {expiresIn:'5d'})
        user.password =undefined
        res.status(200).send({
            success:true,
            message:'Login Successfull!',
            token,
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
