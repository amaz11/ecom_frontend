import { createSlice } from "@reduxjs/toolkit";
import { ProductCarts, RootState } from "../../utils/types/types";


export type CartType = {
    cart:ProductCarts[],
    quantity:number

}

const initialState:CartType ={
    cart:[],
    quantity : 1,
}
export const cartSlice =  createSlice({
    name:"cart",
    initialState,
    reducers:{
        addProduct:(state,action)=>{
            const findProduct:number = state.cart.findIndex(item=> item._id === action.payload._id)
            if(findProduct >= 0){
                if(state.cart[findProduct].Stock <= state.cart[findProduct].quantity) return

                if(state.cart[findProduct].quantity < action.payload.quantity){
                    const newQuantity=  action.payload.quantity - state.cart[findProduct].quantity ;
                    state.cart[findProduct].quantity += newQuantity
                }
                if(state.cart[findProduct].quantity > action.payload.quantity){
                    const newQuantity= state.cart[findProduct].quantity - action.payload.quantity;
                    state.cart[findProduct].quantity -= newQuantity
                }
                // else{
                //     state.cart[findProduct].quantity += 1
                // }
            }
            else{
                state.cart.push(action.payload)
            }
            
        },
        //  This for cart page
        decreseQuantity:(state,action)=>{
            const findProduct:number = state.cart.findIndex(item=> item._id === action.payload._id)
            if(findProduct >= 0){
                if(state.cart[findProduct].Stock <= state.cart[findProduct].quantity) return
                state.cart[findProduct].quantity += 1
            }

        },
        increseQuantity:(state,action)=>{
            const findProduct:number = state.cart.findIndex(item=> item._id === action.payload._id)
            if(findProduct >= 0){
                if(1 >= state.cart[findProduct].quantity) return
                state.cart[findProduct].quantity += 1
            }

        }

    }
})

export const  {addProduct} = cartSlice.actions
export const cartState = (state:RootState) => state.cart
export default cartSlice.reducer