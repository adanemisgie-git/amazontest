export interface productProps{
    brand:string;
    category:string;
    description:string;
    image:string;
    isNew:boolean;
    oldPrice:number;
    price:number;
    title:string;
    _id:number;
}

export interface storeProduct{
    brand:string;
    category:string;
    description:string;
    image:string;
    isNew:boolean;
    oldPrice:number;
    price:number;
    title:string;
    _id:number;
    quantity:number,
}
export interface stateProps{
    productData:[];
    favouriteData:[];
    userInfo:null | string;
    next:any;

}