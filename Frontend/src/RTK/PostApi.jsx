import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000" ,credentials: "include" }),
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: ({ filter , page }) => ({
                url: `/${filter}`,
                body: { page },  // apply only filter array
            })
        }),
        getFilterPosts: builder.query({
            query: ({ filter , code , page }) => ({
                url: `/${filter}/${code}`,
                body: { page }, // apply both filter {filter array , & codeType}
            })
        }),
        getAllLikes: builder.query({
            query: () => ({
                url: `/liked`, // geting all likes post 
                credentials: "include",
            })
        }),
        getAllDisLikes: builder.query({
            query: () => ({
                url: `/disliked`,// geting all Dislikes post
                credentials: "include",
            })
        }),
        getAllSaved: builder.query({
            query: () => ({
                url: `/saved`, // geting all saved post
                credentials: "include",
            })
        }),
    }),
});

export const { 
    useGetPostsQuery, 
    useGetAllDisLikesQuery,
    useGetAllLikesQuery,
    useGetAllSavedQuery,
    useGetFilterPostsQuery,
} = postApi;
