import mongoose from "mongoose";




const connectDB = async () =>{

    try {
        let connect = await mongoose.connect(process.env.MONGO_URL)
        console.log('mongodb connected successfully')
    } catch (error) {
        console.log(error)
    }

};


export default connectDB;