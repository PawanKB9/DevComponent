import express from "express"; 
import { addPost, dislikedPost, dislikePost, filterPost, likedPost, likePost, savedPost, savePost } from "../controllers/postController.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";

const router = express.Router(); 

// liked posts route 
router.route("/liked").get(isAuthenticated,likedPost); 

// disliked posts route 
router.route("/disliked").get(isAuthenticated,dislikedPost); 

// saved posts route 
router.route("/saved").get(isAuthenticated,savedPost);

// filter post route 
router.route("/:filter?").get(filterPost); 



// add post route 
router.route("/addpost").put(isAuthenticated,addPost); 

// like route 
router.route("/like").patch(isAuthenticated,likePost)

// dislike route 
router.route("/dislike").patch(isAuthenticated,dislikePost)

// saved route 
router.route("/save").patch(isAuthenticated,savePost)

export default router