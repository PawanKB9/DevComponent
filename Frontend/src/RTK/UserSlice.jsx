import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users: [{    
        fullName: '',
        userName: '',
        collageName: '',
        password: '',
        email: '',
        selfDescription: '',
        likes: [],
        disLikes: [],
        saved: [],
    }],
};

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        personalUpdate: (state, action) => {
            // Implementation for updating personal info
            const user = state.users.find(user => user.userName === action.payload);
            if(user){
                user = {...user , ...action.payload};
            }
        },
        createProfile: (state, action) => {
            // Implementation for creating a profile
            state.users.push({               
                fullName: action.payload.fullName,
                userName: action.payload.userName,
                collageName: action.payload.collageName || '',
                password: action.payload.password,
                email: action.payload.email,
                selfDescription: action.payload.selfDescription  || '',
                likes: [],
                disLikes: [],
                saved: [],
            })

        },
        deleteProfile: (state, action) => {
            // Implementation for deleting a profile personal data only
            state.users = state.users.filter( user => user.userName !== action.payload );

        },
        addLike: (state, action) => {
            const user = state.users.find(user => user.userName === action.payload.userName);
            if (user && !user.likes.includes(postId)) {
                user.likes.push(action.payload.postId);
            }
        },
        removeLike: (state, action) => {
            const user = state.users.find(user => user.userName === action.payload.userName);
            if (user) {
                user.likes = user.likes.filter((postId) => postId !== action.payload.postId);
            }
        },
        addDisLike: (state, action) => {
            const user = state.users.find(user => user.userName === action.payload.userName);
            if (user && !user.disLikes.includes(postId)) {
                user.disLikes.push(action.payload.postId);
            }
        },
        removeDisLike: (state, action) => {
            const user = state.users.find(user => user.userName === action.payload.userName);
            if (user) {
                user.disLikes = user.disLikes.filter((postId) => postId !== action.payload.postId);
            }
        },
        addSaved: (state, action) => {
            const user = state.users.find(user => user.userName === action.payload.userName);
            if (user && !user.saved.includes(postId)) {
                user.saved.push(action.payload.postId);
            }
        },
        removeSaved: (state, action) => {
            const user = state.users.find(user => user.userName === action.payload.userName);
            if (user) {
                user.saved = user.saved.filter((postId) => postId !== action.payload.postId);
            }
        },
    },
});

export const {
    personalUpdate,
    createProfile,
    deleteProfile,
    addLike,
    removeLike,
    addDisLike,
    removeDisLike,
    addSaved,
    removeSaved
} = userSlice.actions;

export default userSlice.reducer;