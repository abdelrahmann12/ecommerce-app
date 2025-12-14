
import CategoryCards from '@/app/_Component/Categories/CategoryCards';
import { nextOptions } from '@/app/api/auth/[...nextauth]/route'
import { getAllCategories } from '@/categoriesActions';
import { Categories } from '@/types/CategoriesData';
import { getServerSession } from 'next-auth'
import React from 'react'

export default async function page() {
  const x = await getServerSession(nextOptions)
  console.log(x);

  const CatData:Categories = await getAllCategories()

  return (
    <div className=''>
      <CategoryCards CatData={CatData}></CategoryCards>
    </div>
  )
}
