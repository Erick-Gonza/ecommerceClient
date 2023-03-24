import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const products = createApi({
  reducerPath: 'products',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/v1/product' }),
  tagTypes: ['Products'],
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (userId) => `/all/${userId}`,
      invalidatesTags: ['Products']
    }),
    getProductById: builder.query({
      query: (id) => `/${id}`,
      providesTags: ['Products'],
      invalidatesTags: ['Products']
    }),
    getProductsByCategoryId: builder.query({
      query: (id) => `/category/${id}`,
      providesTags: ['Products'],
      invalidatesTags: ['Products']
    }),
    createProduct: builder.mutation({
      query: (body) => ({
        url: '/',
        method: 'POST',
        body
      }),
      invalidatesTags: ['Products']
    }),
    updateProduct: builder.mutation({
      query: (product) => ({
        url: `/${product.id}`,
        method: 'PUT',
        body: product
      }),
      invalidatesTags: ['Products']
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Products']
    })
  })
})

export const {
  useGetAllProductsQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useGetProductByIdQuery,
  useGetProductsByCategoryIdQuery
} = products
