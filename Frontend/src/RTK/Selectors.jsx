import React from "react";
import { useSelector } from "react-redux";

// const currentUser = useSelector((state) => state.currentUser);

// const selectUserInfo = (state, userName) => {
//     const user = state.user.users.find(user => user.userName === userName);
//     return user;
// };
const selectFilterArray = (state) => state.appData.filterArray;

// const filterArr = useSelector(selectFilterArray);


export{
    // selectUserInfo,
    selectFilterArray,

}