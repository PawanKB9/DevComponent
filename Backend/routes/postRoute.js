import express from "express"; 
import { addPost, deleteAllDisliked, deleteAllLiked, deleteAllSaved, dislikedPost, dislikePost, filterCode, filterPost, getMyPosts, getPostById, getUserData, likedPost, likePost, savedPost, savePost } from "../controllers/postController.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";

const router = express.Router(); 

// get liked posts route 
router.route("/liked").get(isAuthenticated,likedPost); 

// get disliked posts route 
router.route("/disliked").get(isAuthenticated,dislikedPost); 

// get saved posts route 
router.route("/saved").get(isAuthenticated,savedPost);

// filter post route 
router.route("/:filter?").get(filterPost); 

// filter for the code route 
router.route("/:filter?/:code?").get(filterCode); 
  
// get a post by postId 
// router.route("/postbyid").get(getPostById); 

// get all posts of an user  
router.route("/getallposts").get(getMyPosts); 

router.route("/userdata").get(getUserData); 



// add post route 
router.route("/addpost").put(isAuthenticated,addPost); 

// like route 
router.route("/like").patch(isAuthenticated,likePost)

// dislike route 
router.route("/dislike").patch(isAuthenticated,dislikePost)

// saved route 
router.route("/save").patch(isAuthenticated,savePost)



// delete all liked posts route 
router.route("/delete/liked").delete(deleteAllLiked); 

// delete all disLiked post route
router.route("/delete/disliked").delete(deleteAllDisliked); 

router.route("/delete/allsaved").delete(deleteAllSaved); 

export default router