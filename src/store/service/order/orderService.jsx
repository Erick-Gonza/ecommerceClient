import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const order = createApi({
  reducerPath: 'order',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/v1/' }),
  tagTypes: ['order'],
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (body) => ({
        url: '/order',
        method: 'POST',
        body
      })
    }),
    createOrderDetail: builder.mutation({
      query: (body) => ({
        url: '/orderDetail',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useCreateOrderMutation,
  useCreateOrderDetailMutation
} = order
