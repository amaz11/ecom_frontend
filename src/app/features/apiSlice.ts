import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { selectAuthToken } from '../authSlice/authSlice'
import { RootState } from '../../utils/types/types';

interface HeadersInterface extends Headers {
    set: (name: string, value: string) => void;
  }
export const apiSlice = createApi({
    reducerPath:"api",
    baseQuery: fetchBaseQuery({
        baseUrl:"http://localhost:5000/api/v1/",
        prepareHeaders:(headers:HeadersInterface,{getState})=>{
                const token = selectAuthToken(getState() as RootState)
                if(token){
                    headers.set("Authorization",`Bearer ${token}`)
                }
                return headers
        }
    }),
    endpoints:()=>({ })
})

