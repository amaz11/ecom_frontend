import { apiSlice } from "../features/apiSlice";

const productSlice = apiSlice.injectEndpoints({
        endpoints:(build)=>({
            getProducts:build.query({
                query:()=>"/products"
            }),
            getProduct: build.query({
                query:(id)=>`/products/${id}`
            })
        }  
        ),
        overrideExisting: false,
    })

    export const {useGetProductsQuery, useGetProductQuery} = productSlice
