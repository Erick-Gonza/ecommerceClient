import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const users = createApi({
  reducerPath: 'users',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/v1/' }),
  tagTypes: ['Users'],
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => '/user',
      providesTags: ['Users']
    }),
    getUserById: builder.query({
      query: (id) => `/user/${id}`,
      providesTags: ['Users']
    }),
    createUser: builder.mutation({
      query: (newUser) => ({
        url: '/user/',
        method: 'POST',
        body: newUser
      }),
      invalidatesTags: ['Users']
    }),
    updateUser: builder.mutation({
      query: (userEdit) => ({
        url: `/user/${userEdit.id}`,
        method: 'PUT',
        body: userEdit
      }),
      invalidatesTags: ['Users']
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/user/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Users']
    }),
    loginUser: builder.mutation({
      query: (body) => ({
        url: '/login',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetAllUsersQuery,
  useGetUserByIdQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
  useLoginUserMutation
} = users
