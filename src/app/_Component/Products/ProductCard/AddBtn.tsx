"use client"
import { AddBtnToCart } from '@/cartActions'
import { Button } from '@/components/ui/button'
import React from 'react'
import { toast } from 'sonner'

export default function AddBtn({id}:{id:string}) {


    async function AddProduct(id:string){
    const data = await AddBtnToCart(id)
    console.log(data);
    if(data.status =="success"){
        toast.success(data.message);

    }else{
        toast.error(data.message)
    }
    }
    
  return (
    <>
    
    <Button onClick={()=>{AddProduct(id)}} className='bg-main  cursor-pointer'>
        Add To Cart
    </Button>
    </>
  )
}
