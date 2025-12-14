
"use server"

import { GetTokenValue } from "./getUserToken"

export async function getAllBrands(){
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const token:any = GetTokenValue()
    if(!token){
        throw new Error("tokrn error")
    }
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/brands`,{
        method:"get",
        headers:{
            token:token
        }
        
    })
    const data = await res.json()
    return data
}