import express from "express"; 
import { login, logout, register, seeProfile, updateProfile } from "../controllers/userController.js";
import isAuthenticated from "../middlewares/isAuthenticated.js"

const router = express.Router(); 

// SignUp route 
router.route("/signup").post(register); 

// Login route      
router.route("/login").post(login); 
 
//LogOut route 
router.route("/logout").post(logout)

// Profile route 
router.route("/profile").get(isAuthenticated ,seeProfile); 

// Update Profile route 
router.route("/profile").patch( isAuthenticated , updateProfile); 

export default router;