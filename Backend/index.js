import express, { json, urlencoded } from "express"
import dotenv from "dotenv"
dotenv.config({}); 
import connectDB from "./Utils/db.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js"
import postRoute from "./routes/postRoute.js"

const app = express(); 

// adding the middlewares 
app.use(express.json())
app.use(express.urlencoded({extended:true})); 
app.use(cookieParser()); 

// cors will be implemented later 

// our API will be - localhost:8000/pp/devcomp

// user route 
app.use("/pp/devcomp" , userRoute )
app.use("/pp/devcomp/post" , postRoute )

const PORT = process.env.PORT
app.listen( PORT , (req, res ) =>{
    console.log(`App is Listening to the port ${PORT}`);
    connectDB(); 
}); 
