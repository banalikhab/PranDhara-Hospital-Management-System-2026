import mongoose from "mongoose";

const webMessageSchema =new mongoose.Schema(
    {
        name: { type: String, required: [true, "Name is Required!"]},
        contact: { type: String, required: [true, 'Contact number or Email is Required!']},
        message: { type: String, required: [true, 'Message is Required!']}
    }, 
    {timestamps:true}
)

const webmessageModel = mongoose.model('webmessage',webMessageSchema)

export default webmessageModel