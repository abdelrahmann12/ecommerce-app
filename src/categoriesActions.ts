"use server"


import { GetTokenValue } from "./getUserToken"
import { Categories } from "./types/CategoriesData"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Category } from "./types/Products"


export async function getAllCategories(){
    const token:unknown = await GetTokenValue()
        if(!token){
            throw new Error("tokrn error")
        }
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/categories`,{
        method:"get",
        headers:{
            token:String(token)
        }
    })
    const data:Categories = await res.json() 
    return data   
}

