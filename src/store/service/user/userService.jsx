import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const users = createApi({
  reducerPath: 'users',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/v1/user' }),
  tagTypes: ['Users'],
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => '/',
      providesTags: ['Users'],
    }),
    getUserById: builder.query({
      query: (id) => `/${id}`,
      providesTags: ['Users'],
    }),
    createUser: builder.mutation({
      query: (newUser) => ({
        url: '/',
        method: 'POST',
        body: newUser,
      }),
      invalidatesTags: ['Users'],
    }),
    updateUser: builder.mutation({
      query: (userEdit) => ({
        url: `/${userEdit.id}`,
        method: 'PUT',
        body: userEdit,
      }),
      invalidatesTags: ['Users'],
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Users'],
    }),
    loginUser: builder.mutation({
      query: (body) => ({
        url: '/login',
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const {
  useGetAllUsersQuery,
  useGetUserByIdQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
  useLoginUserMutation,
} = users
