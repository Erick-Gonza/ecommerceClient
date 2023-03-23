import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const wishlist = createApi({
  reducerPath: 'wishlist',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/v1/wishlist' }),
  tagTypes: ['Wishlist'],
  endpoints: (builder) => ({
    createWishlist: builder.mutation({
      query: (body) => ({
        url: '/',
        method: 'POST',
        body
      }),
      invalidatesTags:['Wishlist']
    }),
    getWishlist: builder.query({
      query: (userId) => `/${userId}`
    })
  })
})

export const {
  useCreateWishlistMutation,
  useGetWishlistQuery
} = wishlist
