import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    user:{
        type:String,
        ref:"users"
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
    },
    codeType:{
        type:Number,
    },
    html:{  
        type:String,
        default:null,
    },
    css:{
        type:String,
        default:null,
    },
    js:{
        type:String,
        default:null,
    },
    react:{
        type:String,
        default:null,
    },
    likes:{
        type:Number,
        default:0,
    },
    disLikes:{
        type:Number,
        default:0,
    },

})

export const posts = mongoose.model('posts' , postSchema); 
