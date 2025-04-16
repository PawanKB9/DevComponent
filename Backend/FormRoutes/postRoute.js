import express from "express"; 
import { addPost, dislikedPost, dislikePost, filterPost, getAllPosts, likedPost, likePost, savedPost, savePost } from '../Controler/postController.js'
import isAuthenticated from '../middlewares/isAuthenticated.js'

const router = express.Router(); 

// liked posts route 
router.route("/liked").get(isAuthenticated,likedPost); 

// disliked posts route 
router.route("/disliked").get(isAuthenticated,dislikedPost); 

// saved posts route 
router.route("/saved").get(isAuthenticated,savedPost);

// filter post route 
// router.route("/:filter?").get(filterPost); 


// get current user posts route 
router.route("/allposts").get(isAuthenticated ,getAllPosts);

// add post route 
router.route("/addpost").post(isAuthenticated,addPost); 

// like route 
router.route("/like").put(isAuthenticated,likePost)

// dislike route 
router.route("/dislike").put(isAuthenticated,dislikePost)

// saved route 
router.route("/save").put(isAuthenticated,savePost)

export default router