import mongoose from "mongoose"
import 'colors'


const connectDB= async () =>{
    mongoose.connection.on('connected',() => {
        console.log('MongoDb Database is Connected'.bgMagenta.white)
    })
    await mongoose.connect(`${process.env.MONGO_LOCAL_URI}/prandhara2026app`)
}

export default connectDB