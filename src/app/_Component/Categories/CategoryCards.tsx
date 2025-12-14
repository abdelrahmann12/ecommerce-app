import { Categories } from '@/types/CategoriesData'
import React from 'react'
import Image from 'next/image'
import Breadcrumb from '../Breadcrumb/Breadcrumb'

export default function CategoryCards({CatData}:{CatData:Categories}) {
  return (
    <>
    <Breadcrumb></Breadcrumb>
    <div className=' flex flex-wrap justify-center gap-2 py-4 '>
      {CatData.data.map((cat)=>{
              return  <div key={cat._id} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <div className="px-5 pb-5">
          <Image className="w-full" src={cat.image} alt="category image" width={300} height={300}></Image>
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">{cat.name}</h5>
          </a>
         
         
        </div>
      </div>
      
      
          })}
    </div>
    </>
    
  )
}
