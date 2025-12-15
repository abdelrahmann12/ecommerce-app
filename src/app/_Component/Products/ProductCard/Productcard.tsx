import React from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { ProductData } from "@/types/Products";
import Link from "next/link";
import AddBtn from "./AddBtn";
import AddWishBtn from "./AddWishList";


export default function Productcard({ product }: { product: ProductData }) {
  
  const { imageCover, category, price, brand ,_id ,  } = product;
  return (


    
      <Card className=" col-span-2">
        <CardHeader>
        <Link href={`/products/${_id}`}>
          <Image
            className=" w-full object-cover"
            src={imageCover}
            alt={`${brand}`}
            width={500}
            height={500}
          ></Image>
        </Link>
          <CardTitle className="text-main">{brand.name}</CardTitle>
          <CardDescription>{category.name}</CardDescription>
          <CardDescription className=" text-black">$ {price}</CardDescription>
           {/* <span>{ratingsAverage}{ratingsQuantity}</span> */}
        </CardHeader>
        {/* <CardContent>
    <p>Card Content</p>
  </CardContent> */}
        <CardFooter className=" flex items-center justify-between">
         
         

          <div className="btn flex items-center gap-2">
            <AddBtn id={_id}></AddBtn>
              <AddWishBtn id={_id}></AddWishBtn>
          </div>
        
        </CardFooter>
      </Card>
    
  );
}
