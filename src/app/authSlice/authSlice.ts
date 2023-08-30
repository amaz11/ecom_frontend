import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../utils/types/types";

export interface Auth {
    token:string|null,
    user:{
        id:string,
        name:string,
        email:string,
        role:string,
        avater:{
            public_id: string,
            url: string
        }

    }| null
}
const initialState:Auth = {
    token:'',
    user:null
}
export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setToken:(state,action)=>{
                state.token = action.payload.access_token
                state.user = action.payload.user
        }
    }
})

export const {setToken} = authSlice.actions
export const selectAuthToken = (state:RootState) => state.auth.token;
export const clgToken =  (state:RootState) => state.auth;
export default authSlice.reducer