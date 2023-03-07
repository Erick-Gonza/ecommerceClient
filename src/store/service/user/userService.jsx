import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const users = createApi({
  reducerPath: 'users',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/v1' }),
  tagTypes: ['Users'],
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => '/user'
    }),
    createUser: builder.mutation({
      query: (body) => ({
        url: '/user',
        method: 'POST',
        body
      })
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
  useCreateUserMutation,
  useLoginUserMutation
} = users
