import mongoose from "mongoose";

const connectDB = async () => {

    mongoose.connection.on('connected', () => {
        console.log("DB Connected Successfully");
    })

    mongoose.connection.on('error', (err) => {
        console.error("Mongoose Connection Error:", err);
    });

    if (!process.env.MONGODB_URI) {
        console.error("MONGODB_URI is missging in environment variables.");
        return;
    }

    try {
        await mongoose.connect(`${process.env.MONGODB_URI}`)
    } catch (error) {
        console.error("MongoDB Connection Error:", error);
    }

}



export default connectDB;