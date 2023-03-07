// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query'
import { createApi } from '@reduxjs/toolkit/dist/query'

export const wishlistItem = createApi({
  endpoints: (builder) => ({
    createWishlistItem: builder.mutation({
      query: (newWishlistItem) => ({
        url: '/',
        method: 'POST',
        body: newWishlistItem
      })
    })
  })
})
