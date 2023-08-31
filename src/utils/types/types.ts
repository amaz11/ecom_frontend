import { store } from "../../app/store"

export type ModalType = {modal:boolean, setModal: (value: boolean) => void,productId?:string, setProductId?:(value:string)=> void}
export type Product = {
    Stock:number, 
    category: string,
    createdAt: string,
    description:string,
    images:{public_id:string,url:string,_id:string}[],
    name:string,
    numofReviwes:number,
    price:number,
    ratings:string,
    reviwes: {comment: string,name:string,rating:number,time:string,user:string,_id:string}[],
    updatedAt?:string,
    __v?: number,
    _id: string
}
export type ProductData =   {
    products:Product[],
    productsCount:number,
    resultPerPage:number,
    success:boolean,
}
export type ApiSingleProduct ={
    product:Product,
    success:boolean,
}

export type LoginResponse = {
    success: boolean,
    user: {
        id:string,
        name:string,
        email:string,
        role:string,
        avater:{
            public_id: string,
            url: string
        }
    },
    access_token: string
}

export type LoginRequest = {
    email:string,
    password:string
}
export type ProductCarts = {
    Stock:number, 
    category: string,
    createdAt: string,
    description:string,
    images:{public_id:string,url:string,_id:string}[],
    name:string,
    numofReviwes:number,
    price:number,
    ratings:string,
    reviwes: {comment: string,name:string,rating:number,time:string,user:string,_id:string}[],
    updatedAt?:string,
    __v?: number,
    _id: string,
    quantity:number,
    total:number
}

// RTK Type
    export type RootState = ReturnType<typeof store.getState>
  