import { ProductCarts } from "./types/types";

export const currentCarts = ()=>{
    const currentCarts = localStorage.getItem("carts");
    let cart: ProductCarts[] | null = null
    if(currentCarts !== null){
        cart = JSON.parse(currentCarts);
    }
    return cart
}