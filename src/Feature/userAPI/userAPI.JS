import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  tagTypes: ['user'],
  endpoints: (builder) => ({
    // Get User
    getUser: builder.query({
      query: () => `/user`,
      providesTags: (result) =>
        result && result
          ? [
              ...result.map(({ id }) => ({ type: 'user', id })),
              { type: 'user', id: 'LIST' }, 
            ]
          : [{ type: 'user', id: 'LIST' }],
    }),
     // delete User
     deleteUser: builder.mutation({
      query: (id) => ({
          url: `/user/${id}`,
          method: 'user',
      }),
      invalidatesTags: (result, error, id) => [
          { type: 'user', id },
          { type: 'user', id: 'LIST' }, 
      ],
  }),
  // add User
  addUser: builder.mutation({
      query: (body) => ({
          url: `/user/`,
          method: 'PUT',
          body
      }),
      invalidatesTags:  [{ type: 'user', id: 'LIST' },] 
  }),
  
  // update User
  updateUser: builder.mutation({
      query: ({id,updateUser}) => ({
          url: `/user/${id}`,
          method: 'PUT',
          body:updateUser,
      }),
      invalidatesTags: (result, error, id) => [
          { type: 'user', id },
          { type: 'user', id: 'LIST' },  
      ], 
  }),

  }),
});

export const { useGetUserQuery,useAddUserMutation,useDeleteUserMutation,useUpdateUserMutation } = userApi;
