import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const users = createApi({
  reducerPath: 'users',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/v1/user' }),
  tagTypes: ['Users'],
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => '',
    }),
    createUser: builder.mutation({
      query: (body) => ({
        url: '',
        method: 'POST',
        body,
      }),
    }),
    loginUser: builder.mutation({
      query: (body) => ({
        url: '/signin',
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const {
  useGetAllUsersQuery,
  useCreateUserMutation,
  useLoginUserMutation,
} = users
