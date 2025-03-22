import mongoose from "mongoose";

const userSchema = mongoose.Schema({
   _id:{
        type:String,
        required:true,
        unique:true
    },
    fullName:{
        type:String,
        required:true
    },
    collegeName:{
        type:String,
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    selfDescription:{
        type:String,
    },
    likes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"posts"
    }],
    disLikes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"posts"
    }],
    saved:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"posts"
    }]

    // for background Image , we will create the field , later 
})

export const users = mongoose.model('users' , userSchema); 