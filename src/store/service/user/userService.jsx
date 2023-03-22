import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Cookies from 'js-cookie'

export const users = createApi({
  reducerPath: 'users',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/v1/' }),
  tagTypes: ['Users', 'Cart'],
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => '/user',
      providesTags: ['Users']
    }),
    getUserCart: builder.query({
      query: (id) => `/cart/${id}`,
      providesTags: ['Cart']
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
    }),
    validateUser: builder.mutation({
      query: (body) => ({
        url: '/validate',
        method: 'POST',
        body: { token: Cookies.get('token') }
      })
    }),
    updateCartItem: builder.mutation({
      query: (body) => ({
        url: '/cart/',
        method: 'PUT',
        body
      })
    })
  })
})

export const {
  useGetAllUsersQuery,
  useGetUserCartQuery,
  useGetUserByIdQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
  useLoginUserMutation,
  useValidateUserMutation,
  useUpdateCartItemMutation
} = users
