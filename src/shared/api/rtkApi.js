import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postApi = createApi({
  reducerPath: 'POST',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  endpoints: (builder) => ({
    getAllPosts: builder.query({
      query: ({ limit = 7, start = 0 }) => ({
        url: '/posts',
        params: {
          _limit: limit,
          _start: start,
        },
      }),
    }),
    getPostById: builder.query({
      query: (id = 1) => ({
        url: `/posts/${id}`,
      }),
    }),
  }),
});

export const { useGetAllPostsQuery, useGetPostByIdQuery } = postApi;
