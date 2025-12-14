'use client'
import { GetProducts } from '@/products'
import type { ProductData } from '@/types/Products'
import React, { useEffect, useState } from 'react'
import Productcard from '../ProductCard/Productcard'
import Breadcrumb from '../../Breadcrumb/Breadcrumb'


export default function ProductData() {
  const [ProductData , setProductData] = useState<ProductData[]>([])
    async function getProductsData() {
    const data = await GetProducts()
    console.log(data)
    setProductData(data.data)
  }

  useEffect(()=>{
    getProductsData()
  },[])


    
  return (
    <div>
      <Breadcrumb></Breadcrumb>
      <div className="  products flex flex-wrap justify-around py-10 gap-4 ">
               {ProductData.map((product)=>{
              return <Productcard key={product._id} product={product}></Productcard>
            })}
          </div>
    </div>
  )
}
