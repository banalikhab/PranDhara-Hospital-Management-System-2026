import webmessageModel from "../models/webMessageModel.js";

//Create message
export const createMessage = async (req, res) => {
    try {
        const {name, contact, message} =req.body
        if(!name || !contact || !message){
            return res.status(402).send({
                success:false,
                message:'Please Provide All Fields'
            })
        }
        const webMessage = new webmessageModel({name, contact, message})
        webMessage.save()
        res.status(201).send({
            success:true,
            message:'Your Message Sent Successfully',
            webMessage
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in Web Message API',
            error
        })
        
    }
}


//Get all messages
export const getAllMessage = async (req, res) => {
    try {
        const webMessages = await webmessageModel.find({})
        res.status(201).send({
            success:true,
            message:'All Web Messages',
            totalcount: webMessages.length,
            webMessage
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in getting all Web Message API',
            error
        })
        
    }
}