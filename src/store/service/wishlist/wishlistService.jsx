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
      providesTags: ['Wishlist'],
      invalidatesTags:['Wishlist']
    }),
    getWishlist: builder.query({
      query: (userId) => `/${userId}`,
      providesTags: ['Wishlist'],
      invalidatesTags:['Wishlist']
    }),
    deleteWishlistItem: builder.mutation({
      query: (body)=>({
        url: '/',
        method: 'DELETE',
        body
      }),
      providesTags: ['Wishlist'],
      invalidatesTags:['Wishlist']
    })
  })
})

export const {
  useCreateWishlistMutation,
  useGetWishlistQuery,
  useDeleteWishlistItemMutation
} = wishlist
