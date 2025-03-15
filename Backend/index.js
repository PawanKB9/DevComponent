import express from "express";
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT || 8000;
const URI = process.env.MONGO_URL;



app.listen(port , (req , res)=>{    
    console.log('Jai Shree Ram ', port);
})