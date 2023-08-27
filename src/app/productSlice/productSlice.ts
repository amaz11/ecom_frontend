import { ApiSingleProduct, ProductData } from "../../utils/types/types";
import { apiSlice } from "../features/apiSlice";

const productSlice = apiSlice.injectEndpoints({
        endpoints:(build)=>({
            getProducts:build.query<ProductData,void>({
                query:()=>"/products"
            }),
            getProduct: build.query<ApiSingleProduct,string>({
                query:(id)=>`/products/${id}`
            })
        }  
        ),
        overrideExisting: false,
    })

    export const {useGetProductsQuery, useGetProductQuery} = productSlice
