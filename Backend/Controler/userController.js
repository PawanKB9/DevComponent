import { users } from "../models/user.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

// Register controller
export const register = async( req , res ) =>{
    try {
        const {username, fullName, selfDescription ,password ,collageName ,email} = req.body;
        if(!username || !password || !email || !fullName){
            return res.status(400).send('some information is missing ')
        }

        // apply middleware before saving
        // bcrypt , authentication , token generation, etc.
        const hashedPassword = await bcrypt.hash( password , 10); 

        const newUser = new users({
            _id:username,
            fullName,
            collageName,
            password:hashedPassword,
            email,
            selfDescription,
        })
        await newUser.save()
        console.log(`${newUser}`)
           return res.status(200).send(newUser)
       }  
       catch (err) {
           console.error(err);
           
           if (err.code === 11000) { // Correct way to check duplicate key error
               return res.status(409).json({ error: "User already exists" });
           }
   
           return res.status(500).json({ error: "Internal server error" });
       }
}

// Login controller 
export const login = async ( req , res ) =>{
    try {
        const {_id , password } = req.body; 

        if( !_id || !password ){
            res.status(400).json({
                message:"Some information is missing", 
                sucess:false
            })
        }

        
        // checking if the user exists or not 
        const user = await users.findOne({_id}); 
        if( ! user ){
            return res.status(400).json({
                message:"Username does not exists", 
                success:false,
            })
        }

        // now checking if the password is correct or NOT 
        const correctPass = await bcrypt.compare( password , user.password); 
        if( !correctPass ){
            res.status(400).json({
                message:"Incorrect username or password", 
                success:false,
            })
        }

        // we will store the userId in the form of abject inside the token 
        const tokenData = { userId : user._id }; 

        // now as all the details are correct , so generating the TOKEN
        const token = jwt.sign( tokenData , process.env.SECRET_KEY , {expiresIn :'1d'} ); 


        // now adding the details of the user in user variable 
        const newUser = {
            _id:user._id, 
            fullName:user.fullName,
            collegeName:user.collegeName, 
            email:user.email,  
            selfDescription:user.selfDescription,
        }

        // send the token in the from of cookie in the browser 
        return res.status(201).cookie("token", token,  {maxAge: 1*24*60*60*1000 , httpsOnly:true , sameSite:'strict'}).json({
            message:`Welcome back ${newUser.fullName}`, 
            newUser, 
            success:true,
        })
    } catch (error) {
        console.log(error);
    }
}

// Log out controller 
export const logout = (req , res ) =>{
    try {
        // we will just empty the browser token 
        return res.status(201).cookie("token", "" ,  {maxAge : 0 } ).json({
            message:"Logged out successfully", 
            success:true,
        })
    } catch (error) {
        console.log(error); 
    }
}


// See profile controller 
export const seeProfile = async (req ,res) =>{
    
    // find user details by id from "User" then 
    // find all posts by userId from "Post"
    try {
        const { _id } = req.body;
        if(!_id){
            return res.status(400).send('Id not found')
        }
        const User = await users.findById(_id);
        if (!User) {
            return res.status(404).send('User not found');
        }
        return res.status(200).send(User); 
    } 
    catch (err) {
        console.log(err)
        return res.status(500).send('Internal server error')
    }

}

// update profile controller 
export const updateProfile =  async(req, res) => {
    
    // partial update : update only specified fields
    try {
        const {_id , fullName , collageName, password, selfDescription, email } = req.body;
        if(!_id){
            return res.status(400).send('username not found')
        }
        const updatedUser = await users.findByIdAndUpdate(
            _id,
            { fullName, collageName, password, selfDescription, email },
            { new: true }
        );
        if (!updatedUser) {
            return res.status(404).send('User not found');
        }
        return res.status(200).send(`updated sucessfully ${updatedUser}`)

    } 
    catch (err) {
        console.log(err)
        return res.status(500).send('Internal server error')
    }
}