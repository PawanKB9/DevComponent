import { configureStore } from '@reduxjs/toolkit';
import userReducer from './UserSlice.jsx';
import filterArrayReducer from './AppDataSlice.jsx';

const store = configureStore({
    reducer: {
        users: userReducer,
        appData: filterArrayReducer,
    }
});

export default store;