import mongoose from "mongoose";

const connectDB = async () => {

    mongoose.connection.on('connected', () => {
        console.log("DB Connected");
    })

    if (!process.env.MONGODB_URI) {
        console.error("MONGODB_URI is not defined in environment variables.");
        return;
    }

    try {
        await mongoose.connect(`${process.env.MONGODB_URI}`)
    } catch (error) {
        console.error("MongoDB Connection Error:", error);
    }


}

export default connectDB;