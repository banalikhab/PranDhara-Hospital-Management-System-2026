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
export const getAllMessages = async (req, res) => {
    try {
        const webMessages = await webmessageModel.find({})
        res.status(201).send({
            success:true,
            message:'All Web Messages',
            totalCount: webMessages.length,
            webMessages
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



//Delete messages
export const deleteWebMessage = async (req, res) => {
    try {
        const {id} =req.params
        if(!id){
            return res.status(404).send({
                success:false,
                message: 'Please provide a Message ID'
            })
        }
        // //find message
        // const webMessage = await webmessageModel.findById(id)
        // if(!webMessage){
        //     return res.status(404).send({
        //         success:false,
        //         message: 'No Message Found with this ID'
        //     })
        // }
        // res.status(201).send({
        //     success:true,
        //     message:'All Web Messages',
        //     totalCount: webMessages.length,
        //     webMessages
        // })

        //find message and delete directly
        const webMessage = await webmessageModel.findByIdAndDelete(id)

        res.status(201).send({
            success:true,
            message:'Messages has been deleted'
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in deleting Web Message API',
            error
        })
        
    }
}