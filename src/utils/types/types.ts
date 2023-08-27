export type ModalType = {modal:boolean, setModal: (value: boolean) => void,productId?:string, setProductId?:(value:string)=> void}
export type Product = {
    Stock:number, 
    category: string,
    createdAt: string,
    description:string,
    images:{public_id:string,url:string,_id:string}[],
    name:string,
    numofReviwes:number,
    price:20,
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