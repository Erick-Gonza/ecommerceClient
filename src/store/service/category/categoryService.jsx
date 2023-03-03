import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const categories = createApi({
  reducerPath: 'categories',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/v1/category' }),
  tagTypes: ['Categories'],
  endpoints: (builder) => ({
    getAllCategories: builder.query({
      query: () => '/',
      providesTags: ["Categories"]
    }),
    createCategory: builder.mutation({
      query: (newCategory) => ({
        url: '/',
        method: 'POST',
        body:newCategory,
      }),
      invalidatesTags: ["Categories"]
    }),
    updateCategory: builder.mutation({
      query: ({id, ...rest}) => ({
        url: `/${id}`,
        method: 'PUT',
        body: rest
      })
    }),
    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ["Categories"]
    }),
  }),
})

export const { 
  useGetAllCategoriesQuery, 
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation } =
  categories
