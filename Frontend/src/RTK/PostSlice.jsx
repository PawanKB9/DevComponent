import { createSlice } from '@reduxjs/toolkit';
import { posts } from '../../../Backend/models/post';

const initialState = {
    posts: [{
       user: '', 
       title: '', 
       description: '',
       codeType:'',  
       html:'', 
       css:'', 
       js:'', 
       react:'', 
       likes:'',
       disLikes:'', 
    }]
};

const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        // create post  
        createPost:(state , action ) =>{
            const { userName } = action.payload; 
            state.posts.push({
                user: userName, 
                title:action.payload.title, 
                description:action.payload.description || "", 
                codeType:action.payload.codeType, 
                html: action.payload.html || "",
                css: action.payload.css || "",
                js: action.payload.js || "",
                react: action.payload.react ||"",
                likes:0, 
                disLikes:0, 
            })
        },

        likePost: (state, action) => {
            const { userName, postId , isLiked } = action.payload;
            const post = state.posts.find(post => post._id === postId);
            if( post && isLiked === true ) {
                post.likes += 1;
            }
            else if( post && isLiked === false ){
                post.likes -= 1; 
                
            }
        },

        dislikePost: (state, action) => {
            const { userName, postId , isDisliked } = action.payload;
            const post = state.posts.find(post => post._id === postId);
            if (isDisliked === true ) {
                post.disLikes += 1;
            }
            else if( post && isDisliked == false ){
                posts.disLikes -= 1; 
            }
        },
    }
});

export const { createPost, likePost, dislikePost } = postSlice.actions;
export default postSlice.reducer;