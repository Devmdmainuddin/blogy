import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  tagTypes: ['post'],
  endpoints: (builder) => ({
    // Get posts
    getPosts: builder.query({
      query: () => `/blogposts`,
      providesTags: (result) =>
        result && result
          ? [
              ...result.map(({ id }) => ({ type: 'post', id })),
              { type: 'post', id: 'LIST' }, 
            ]
          : [{ type: 'post', id: 'LIST' }],
    }),
  }),
});

export const { useGetPostsQuery } = postApi;
