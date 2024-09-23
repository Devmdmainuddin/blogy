import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  tagTypes: ['blog'],
  endpoints: (builder) => ({
    // Get posts
    getBlogs: builder.query({
      query: () => `/blogs`,
      providesTags: (result) =>
        result && result
          ? [
              ...result.map(({ id }) => ({ type: 'blog', id })),
              { type: 'blog', id: 'LIST' }, 
            ]
          : [{ type: 'blog', id: 'LIST' }],
    }),
     // delete product
     deleteBlogs: builder.mutation({
      query: (id) => ({
          url: `/blogs/${id}`,
          method: 'DELETE',
      }),
      invalidatesTags: (result, error, id) => [
          { type: 'blog', id },
          { type: 'blog', id: 'LIST' }, 
      ],
  }),
  // add blog
  addBlogs: builder.mutation({
      query: (body) => ({
          url: `/blogs/`,
          method: 'POST',
          body
      }),
      invalidatesTags:  [{ type: 'blog', id: 'LIST' },] 
  }),
  
  // update blog
  updateBlogs: builder.mutation({
      query: ({id,updateBlogs}) => ({
          url: `/blogs/${id}`,
          method: 'PUT',
          body:updateBlogs,
      }),
      invalidatesTags: (result, error, id) => [
          { type: 'blog', id },
          { type: 'blog', id: 'LIST' },  
      ], 
  }),

  }),
});

export const { useGetBlogsQuery,useAddBlogsMutation,useDeleteBlogsMutation,useUpdateBlogsMutation } = postApi;
