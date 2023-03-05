import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const products = createApi({
  reducerPath: 'products',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/v1/product' }),
  tagTypes: ['Products'],
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => '/',
      providesTags: ['Products'],
    }),
    getProductById: builder.query({
      query: (id) => `/${id}`,
    }),
    getProductsByCategoryId: builder.query({
      query: (id) => `/category/${id}`,
    }),
    createProduct: builder.mutation({
      query: (body) => ({
        url: '/',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Products'],
    }),
    updateProduct: builder.mutation({
      query: (product) => ({
        url: `/${product.id}`,
        method: 'PUT',
        body: product,
      }),
      invalidatesTags: ['Products'],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Products'],
    }),
  }),
})

export const {
  useGetAllProductsQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useGetProductByIdQuery,
  useGetProductsByCategoryIdQuery,
} = products
