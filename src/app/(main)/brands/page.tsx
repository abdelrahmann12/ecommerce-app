import BrandsCards from '@/app/_Component/Brands/BrandsCards';
import Breadcrumb from '@/app/_Component/Breadcrumb/Breadcrumb';
import { getAllBrands } from '@/brandActions'
import { BrandsData } from '@/types/BrandsData';
import React from 'react'

export default async function page() {

 const data:BrandsData =  await getAllBrands()
 

  

  return (
    <div>
      <Breadcrumb></Breadcrumb>
      <div className="brands">
        <BrandsCards data={data}></BrandsCards>
      </div>
    </div>
  )
}
