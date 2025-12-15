"use client"
import { AddBtnToCart } from '@/cartActions'
import { Button } from '@/components/ui/button'
import React from 'react'
import { toast } from 'sonner'


type AddBtnProps = {
  id: string,
  className?: string // إضافة خاصية لتغيير الكلاس من برا
}


export default function AddBtn({id , className}:AddBtnProps) {


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
    <Button onClick={()=>{AddProduct(id)}} className ={`bg-main  cursor-pointer w-fit ${className ? className : '' } `} >
        Add To Cart
    </Button>

  )
}
