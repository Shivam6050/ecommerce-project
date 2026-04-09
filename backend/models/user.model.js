import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type:String, 
        required:true 
    },
     email: {
        type:String, 
        required:true ,
        unique:true
    },
     password: {
        type:String, 
        required:false 
    },

     cartData: {
        type:Object, 
        default: {}
    },
    resetPasswordOtp: String,
    resetPasswordOtpExpires: Date,


}, {minimize: false})

const userModel = mongoose.models.user || mongoose.model('user',userSchema)

export default userModel