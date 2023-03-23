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
    }),
    getOrderList: builder.mutation({
      query: (id) => ({
        url: `/order/${id}`
      })
    }),
    getOrderDetailList: builder.query({
      query: (orderId) => `/orderDetail/${orderId}`
    })
  })
})

export const {
  useCreateOrderMutation,
  useCreateOrderDetailMutation,
  useGetOrderListMutation,
  useGetOrderDetailListQuery
} = order
