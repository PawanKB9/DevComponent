import React from "react";

const selectUserInfo = (state, userId) => {
    const user = state.user.users.find(user => user.userInfo.userId === userId);
    return user ? user.userInfo : null;
};
const selectFilterArray = (state) => state.appData.filterArray;

// const selectLikes = (state ,userId) => {
// // these will be from postSlice
// }
// const selectDisLikes = (state ,userId) => {
// // these will be from postSlice
// }
// const selectSaved = (state ,userId) => {
// // these will be from postSlice
// }

export{
    selectUserInfo,
    selectFilterArray,

}