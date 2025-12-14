"use server"
import { GetTokenValue } from "./getUserToken"
import { Products } from "./types/Products";

export async function GetProducts(){
    const token = GetTokenValue();
    if(!token){
        throw new Error("token error")
    }
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/products`,{
        method:"get",
        headers:{
            token:String(token)
        }

    }
    )
    const data:Products = await res.json();
    return data
}