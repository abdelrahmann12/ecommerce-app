"use server"
import { GetTokenValue } from "./getUserToken"
import { CardData } from "./types/CartData";

 
export async function getCartData(){
    const token = await GetTokenValue();
    if(!token){
        throw new Error("token error")
    }
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/cart`,{
        method:"get",
        headers:{
            token:String(token)
        }
    })
    const data:CardData = await res.json();
    return data;

}
export async function AddBtnToCart(id:string) {
     const token:unknown = await GetTokenValue();
    if(!token){
        throw new Error("token error")
    }
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/cart?=${id}`,{
        method:'post',
        body:JSON.stringify({
            productId: id 
        }),
        headers:{
            token:String(token),
            'content-type':"application/json"
        }
    })
    const data = await res.json()
    return data
}

export async function removeCartProduct(id:string) {
     // eslint-disable-next-line @typescript-eslint/no-explicit-any
     const token:any = await GetTokenValue();
    if(!token){
        throw new Error("token error")
    }
     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/cart?=${id}`,{
        method:'delete',
        headers:{
            token:token,
        }
    })
    const data = await res.json()
    return data
}

export async function ClearCart(){
     const token:unknown = await GetTokenValue();
    if(!token){
        throw new Error("token error")
    }
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/cart`,{
        method:"delete",
        headers:{
            token:String(token),
        }
    })
    const data = await res.json()
    return data 
}



export async function UpdateQuantity(id:string , count:number){
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const token:any = await GetTokenValue()
    if(!token){
        throw new Error("token error")
    }
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/cart/${id}`,{
        method:'put',
        body:JSON.stringify({
            count:count
        }),
        headers:{
            token:token,
            'content-type':'application/json'
        }
        
    }) 
    const data = await res.json() 
    return data ;  
}


