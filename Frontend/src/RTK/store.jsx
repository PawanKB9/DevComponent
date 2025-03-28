import { configureStore } from '@reduxjs/toolkit';
import userReducer from './UserSlice.jsx';
import filterArrayReducer from './AppDataSlice.jsx';
import postReducer from './PostSlice.jsx'
import currentUser from './CurrentUser.jsx'

const store = configureStore({
    reducer: {
        users: userReducer,
        appData: filterArrayReducer,
        posts:postReducer,
        currentUser:currentUser,
    }
});

export default store;