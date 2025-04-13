import { postApi } from './PostApi.jsx';
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = postApi.injectEndpoints({
    endpoints: (builder) => ({
        uploadProfileImage: builder.mutation({
            query: (formData) => ({
              url: '/upload-profile',
              method: 'POST',
              body: formData,
            }),
          }),          
        ResetPassword: builder.mutation({
            query: ({oldPassword ,newPassword}) => ({
                url:`/changePassword`,
                method: 'POST',
                body: {oldPassword ,newPassword},
                credentials:'include',
            }),
        }),
        forgotPassword: builder.mutation({
            query: ({email , password}) => ({
                url:`/forgotPassword`,
                method:'POST',
                body: {email ,password},
            }),
        }),
        loginUser: builder.mutation({
            query: ({userName,password}) => ({
                url:`/login`,
                method:'POST',
                body: {userName,password},
            }),
            invalidatesTags: ['curUser'],
        }),
        createNewUser: builder.mutation({
            query: (userData) => ({
                url:`/signup`,
                method:'POST',
                body: {userData},
            }),
            invalidatesTags: ['curUser'],
        }),
        updateCurrentUser: builder.mutation({
            query: ({userData}) => ({
                url:`/profile`,
                method:'PATCH',
                credentials:'include',
                body: {userData},
            }),
            onQueryStarted: async ({userData} ,{dispatch ,queryFulfilled}) => {
                let action;
                try {
                    action = dispatch(userApi.util.updateQueryData('getCurrentUser', undefined, (data) => {
                        // Merge the incoming userData with the existing data
                        const newData = { ...data, ...userData };
                        return newData;
                    }));
                    await queryFulfilled;
                } catch (err) {
                    if(action) action.undo();
                }
            },
            invalidatesTags: ['curUser'],
        }),
        getCurrentUser: builder.query({
            query: () => ({
                url:`/profile`,
                credentials:'include',
            }),
            providesTags: ['curUser'],
        }),
        deleteSaved: builder.mutation({
            query: ({userName,savedArr}) => ({
                url:`/allSaved`,
                method:"DELETE",
                credentials:'include',
                body: {userName , savedArr},
            }),
            onQueryStarted: async ({savedArr} ,{dispatch ,queryFulfilled}) => {
                let action;
                try {
                    action = dispatch(postApi.util.updateQueryData('getAllSaved' ,undefined ,(data) => {
                        const newData = data.filter((curData) => !savedArr.includes(curData.postId))
                        return newData;
                    }))
                    await queryFulfilled;
                } catch (err) {
                    if(action) action.undo();
                }
            },
            invalidatesTags: ['savedPost'],
        }),
        deleteDislikes: builder.mutation({
            query:({userName ,disLikeArr}) => ({
                url:`/allDisLikes`,
                credentials:'include',
                body:{userName ,disLikeArr},
                method:'DELETE',
            }),
            onQueryStarted: async ({disLikeArr},{dispatch ,queryFulfilled}) => {
                let action;
                try {
                    action = dispatch(postApi.util.updateQueryData('getAllDisLikes' ,undefined ,(data) => {
                        const newData = data.filter((curData) => !disLikeArr.includes(curData.postId))
                        return newData;
                    }))
                    await queryFulfilled;
                } catch (err) {
                    if(action) action.undo();
                }
            },
            invalidatesTags: ['disLikePost'],
        }),
        deleteLikes: builder.mutation({
            query: ({ userName, likeArr }) => ({
                url: `/allLikes`,
                method: 'DELETE',
                credentials: 'include',
                body: { userName, likeArr },
            }),
            onQueryStarted: async ({ likeArr }, { dispatch, queryFulfilled }) => {
                let action;
                try {
                    action = dispatch(postApi.util.updateQueryData('getAllLikes', undefined, (data) => {
                        // Filter out the posts that have been present in likeArr
                        const newData = data.filter((curData) => !likeArr.includes(curData.postId));
                        return newData;
                    }));
                    await queryFulfilled;
                } catch (err) {
                    if (action) action.undo();
                }
            },
            invalidatesTags: ['likedPost'],
        }),
        getUserPost: builder.query({
            query: ({userName}) => ({
                url: '/myPost',  // post of any user by userName
                method: 'GET',
                params: { userName },
            }),
        }),
        getOtherUserData: builder.query({
            query: (userName) => ({ // for other user data
                url: '/userData',  // FullName, CollegeName, selfDescribe, userName
                method: 'GET',
                params: { userName },
            }),
        })
    }),
    // overrideExisting: false, // Optional: add this if you want to override existing endpoints
});

export const {
    useUploadProfileImageMutation,
    useResetPasswordMutation,
    useForgotPasswordMutation,
    useLoginUserMutation,
    useCreateNewUserMutation,
    useUpdateCurrentUserMutation,
    useGetCurrentUserQuery,
    useDeleteSavedMutation,
    useDeleteDislikesMutation,
    useDeleteLikesMutation,
    useGetUserPostQuery,
    useGetOtherUserDataQuery,
    usePrefetch,
} = userApi;

// const [trigger, { data, isFetching }] = useLazyGetUserDetailsQuery(); // or your endpoint name

// const [hasFetched, setHasFetched] = useState(false);

// const handleHover = () => {
//   if (!hasFetched) {
//     trigger(userId); // or whatever your param is
//     setHasFetched(true);
//   }
// };

// const [shouldFetch, setShouldFetch] = useState(false);

// const { data, isFetching } = useGetUserQuery(userId, {
//   skip: !shouldFetch,
// });

// const handleHover = () => {
//   if (!shouldFetch) setShouldFetch(true);
// };


{/* <Link onMouseEnter={handleHover} to={`/user/${userId}`}>
  View Profile
</Link>



const [loginUser, { data, error, isLoading }] = useLoginUserMutation();

const handleLogin = async () => {
  try {
    const response = await loginUser({ email, password }).unwrap();
    console.log('User data:', response);
  } catch (err) {
    console.error('Login error:', err);
  }
}; */}


// export const userApi = createApi({
//     reducerPath: "userApi",
//     baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000" }),
//     endpoints: (builder) => ({
//         getUserDetails: builder.query({
//             query: ({ userName , password }) => ({
//                 url:`/login`, // current user personal data
//                 body:{ userName ,password },// can be omited to use by Handler
//                 credentials: "include",
//             }),
//         }),
//         getUserPost: builder.query({
//             query: (userName) => ({
//                 url: '/myPost',  // post of any user by userName
//                 body: { userName },
//             }),
//         }),
//         getProfileDetails: builder.query({
//             query:() => ({  // current user personal data
//                 url:`/profile`,
//                 credentials:'include',
//             })
//         }),
//         getUserData: builder.query({
//             query:(userName) => ({ // for other user data
//                 url:`/userData`,  // FullName,CollageName,selfDescribe, userName
//                 body: { userName },
//             })
//         })
//     }),
// });