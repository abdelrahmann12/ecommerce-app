"use client";
import { BrandsData } from "@/types/BrandsData";
import Image from "next/image";
import React from "react";

export default function BrandsCards({ data }: { data: BrandsData }) {

    
  return (
    <div className=" flex gap-2  flex-wrap justify-center py-6">
    {data.data.map((brand)=>{
        return  <div key={brand._id} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <div className="px-5 pb-5">
    <Image className="w-full" src={brand.image} alt="brand image" width={300} height={300}></Image>
    <a href="#">
      <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">{brand.name}</h5>
    </a>
   
   
  </div>
</div>


    })}
    </div>
  );
}
