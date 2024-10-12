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
            transformResponse: (response, meta, arg) => {
               
                const sortOrder = arg?.sortOrder || 'new'; 
                const sortedData = [...response].sort((a, b) => {
                    const dateA = new Date(a.createAt);
                    const dateB = new Date(b.createAt);
                    return sortOrder === 'new' ? dateB - dateA : dateA - dateB;
                });
                return sortedData;
            },

        }),

        getBlogsByEmail: builder.query({
            query: (email) => {
         
                if (!email) {
                    console.error("Email is undefined");
                }
                return `/blogs/${email}`;
            },
            providesTags: (result) =>
                result && result.length > 0
                    ? [
                        ...result.map(({ _id }) => ({ type: 'blog', id: _id })),
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
            invalidatesTags: [{ type: 'blog', id: 'LIST' },]
        }),

        // update blog
        updateBlogs: builder.mutation({
            query: ({ id, updateBlogs }) => ({
                url: `/blogs/${id}`,
                method: 'PUT',
                body: updateBlogs,
            }),
            invalidatesTags: (result, error, id) => [
                { type: 'blog', id },
                { type: 'blog', id: 'LIST' },
            ],
        }),

    }),
});

export const { useGetBlogsQuery, useGetBlogsByEmailQuery, useAddBlogsMutation, useDeleteBlogsMutation, useUpdateBlogsMutation } = postApi;
