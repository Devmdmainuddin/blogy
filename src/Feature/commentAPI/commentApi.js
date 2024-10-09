import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const commentApi = createApi({
    reducerPath: 'commentApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_API_URL}` }),
    tagTypes: ['comment'],
    endpoints: (builder) => ({
        // get comment
        getComment: builder.query({
            query: () => `/comments`,
            providesTags: (result) =>
                result
                    ? [
                        ...result.map(({ id }) => ({ type: 'comment', id })),
                        { type: 'comment', id: 'LIST' }, // Track the list
                    ]
                    : [{ type: 'comment', id: 'LIST' }],
            
        }),
        
        // delete Comment
        deleteComment: builder.mutation({
            query: (id) => ({
                url: `/comment/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: (result, error, id) => [
                { type: 'comment', id },
                { type: 'v', id: 'LIST' },
            ],
        }),
        // add comment
        addComment: builder.mutation({
            query: (body) => ({
                url: `/comment`,
                method: 'POST',
                body
            }),
            invalidatesTags: (result, error, id) => [
                { type: 'comment', id },
                { type: 'comment', id: 'LIST' }
            
            ],
        }),
    }),
});

export const { useGetCommentQuery, useDeleteCommentMutation, useAddCommentMutation} = commentApi;
