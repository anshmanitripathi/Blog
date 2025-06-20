import mongoose from "mongoose";


export const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database connected succesfully");
    } catch (error) {
        console.log("MonogoDB connection failed.");
    }
}


