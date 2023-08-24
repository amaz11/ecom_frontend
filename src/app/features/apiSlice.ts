import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath:"api",
    baseQuery: fetchBaseQuery({
        baseUrl:"http://localhost:4000/api/v1/",
    }),
    endpoints:(builder)=>({
        getProduct:builder.query({
            query:()=>"get/product"
        })
    })
})


export const {useGetProductQuery} = apiSlice