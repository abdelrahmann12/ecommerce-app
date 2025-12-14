"use server"

import { GetTokenValue } from "./getUserToken";

export async function getAllWishList(){
     // eslint-disable-next-line @typescript-eslint/no-explicit-any
     const token:any = await GetTokenValue();
     console.log(token)
        if(!token){
            throw new Error("token error")
        }
     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/wishlist`,{
        method:"get",
        headers:{
            token:token
        }
     })    
     const data = await res.json()
     return data  
}

export async function AddToWishlist(id:string){
     // eslint-disable-next-line @typescript-eslint/no-explicit-any
     const token:any = await GetTokenValue();
     console.log(token)
        if(!token){
            throw new Error("token error")
        }
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/wishlist`,{
            method:"post",
            body:JSON.stringify({
                productId:id
            }),
            headers:{
                token:token,
                "content-type":'application/json'
            }
        })
        const data = await res.json()
        return data
}


export async function RemoveFromWish(id:string) {
    const token:unknown = await GetTokenValue();
    if(!token){
        throw new Error ("token error")
    }
    const res  =  await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/wishlist/${id}`,{
        method:"delete",
        headers:{
            token:String(token),
            "content-type":'application/json'
        },


        })
      const data = await res.json();
      return data  
}