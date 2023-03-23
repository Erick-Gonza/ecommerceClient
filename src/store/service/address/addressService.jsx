
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
            query: (id) => `/address/${id}`,
            providesTags: ['Address'],
            invalidatesTags: ['Address']
        }),
        getAllCities: builder.query({
            query: (stateId) => `/cities/${stateId}`,
            invalidatesTags: ['Address']
        }),
        getAllCountries: builder.query({
            query: () => '/countries/',
            invalidatesTags: ['Address']
        }),
        getAllStates: builder.query({
            query: (countryId) => `/states/${countryId}`,
            invalidatesTags: ['Address']
        }),
        getStateById: builder.query({
            query:(stateId) => `/states/state/${stateId}`,
            invalidatesTags: ['Address']
        }),
        getCityById: builder.query({
            query:(cityId) => `/cities/city/${cityId}`,
            invalidatesTags: ['Address']
        })
    })
})

export const {
useGetAddressesByUserIdQuery,
useGetAddressIdQuery,
useUpdateAddressMutation,
useGetAllCitiesQuery,
useGetAllStatesQuery,
useGetAllCountriesQuery,
useGetStateByIdQuery,
useGetCityByIdQuery
} = address