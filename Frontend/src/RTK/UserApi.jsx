import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000" }),
    endpoints: (builder) => ({
        getUserDetails: builder.query({
            query: ({ userName ,password }) => ({
                url:`/login`, // current user personal data
                body:{ userName ,password },// can be omited to use by Handler
                credentials: "include",
            }),
        }),
        getUserPost: builder.query({
            query: (userName) => ({
                url: '/myPost',  // post of any user by userName
                body: { userName },
            }),
        }),
        getProfileDetails: builder.query({
            query:() => ({  // current user personal data
                url:`/profile`,
                credentials:'include',
            })
        }),
        getUserData: builder.query({
            query:(userName) => ({ // for other user data
                url:`/userData`,  // FullName,CollageName,selfDescribe, userName
                body: { userName },
            })
        })
    }),
});

export const { 
    useGetUserDetailsQuery,
    useGetUserPostQuery,
    useGetProfileDetailsQuery,
    useGetUserDataQuery,
} = userApi;
