
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import React from 'react'

export const address = createApi({
    reducerPath:'address',
    baseQuery:fetchBaseQuery({baseUrl:'/api/v1'}),
    tagTypes: ['Address'],
    endpoints:(builder)=>({
        createAdress: builder.mutation({
            query: (newAddress) => ({
                url:'/address',
                method: 'POST',
                body: newAddress
            }),
            invalidatesTags: ['Address']
        }),
        updateAddress: builder.mutation({
            query: (addressEdit) => ({
                url:`/address/${addressEdit.id}`,
                method: 'PUT',
                body: addressEdit
            }),
            invalidatesTags: ['Address']
        }),
        getAddressesByUserId: builder.query({
            query: (id) => `/address/${id}`
        }),
        getAllCities: builder.query({
            query: () => '/cities/',
        }),
        getAllCountries: builder.query({
            query: () => '/countries/',
        }),
        getAllStates: builder.query({
            query: () => '/states/',
        })
    })
})

export const {
useGetAddressesByUserIdQuery,
useGetAddressIdQuery,
useUpdateAddressMutation,
useGetAllCitiesQuery,
useGetAllStatesQuery,
useGetAllCountriesQuery
} = address