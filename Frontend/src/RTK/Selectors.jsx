import React from "react";
import { useSelector } from "react-redux";
import { userApi } from "./UserApi";
import { postApi } from "./PostApi";

// const currentUser = useSelector((state) => state.currentUser);

// const selectUserInfo = (state, userName) => {
//     const user = state.user.users.find(user => user.userName === userName);
//     return user;
// };
const selectFilterArray = (state) => state.appData.filterArray;

// const filterArr = useSelector(selectFilterArray);


// Selectors for Querry from RTK 
// Selector for getPosts
const selectGetPosts =  postApi.endpoints.getPosts.select;

// Selector for getFilterPosts
const selectGetFilterPosts =  postApi.endpoints.getFilterPosts.select;

// Selector for getAllLikes
const selectGetAllLikes =  postApi.endpoints.getAllLikes.select;

// Selector for getAllDisLikes
const selectGetAllDisLikes =  postApi.endpoints.getAllDisLikes.select;

// Selector for getAllSaved
const selectGetAllSaved =  postApi.endpoints.getAllSaved.select;

// current user personal data
const selectUserLoginDetails = userApi.endpoints.getUserDetails.select;

// post of any user by userName
const selectGetUserPost = userApi.endpoints.getUserPost.select;

// current user personal data
const selectGetProfileDetails = userApi.endpoints.getProfileDetails.select;

// for other user data FullName,CollageName,selfDescribe, userName
const selectGetUserData = userApi.endpoints.getUserData.select;

export{
    // selectUserInfo,
    selectFilterArray,

    selectGetPosts,
    selectGetFilterPosts,
    selectGetAllDisLikes,
    selectGetAllLikes,
    selectGetAllSaved,
    selectGetProfileDetails,
    selectGetUserData,
    selectGetUserPost,
    selectUserLoginDetails,
}