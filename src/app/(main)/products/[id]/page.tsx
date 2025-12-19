import AddBtn from "@/app/_Component/Products/ProductCard/AddBtn";
import ProductSlider from "@/app/_Component/Products/ProductSlider/ProductSlider";
import { AddBtnToCart } from "@/cartActions";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProductDetails, ProductsDetails } from "@/types/ProductsDetails";
import React from "react";

export default async function page({ params }: { params: { id: string } }) {
  const { id } = params;
  console.log(id);
  const res = await fetch(
    `https://ecommerce.routemisr.com/api/v1/products/${id}`
  );
  const data: ProductsDetails = await res.json();
  const productDetails: ProductDetails = data.data;
  console.log(productDetails);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { brand, category, imageCover, price, images, title, _id , description   } =
    productDetails;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async function AddCart(id: string) {
    const data = await AddBtnToCart(id);
    return data;
  }
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-12  gap-4">
        <div className=" md:col-span-3">
          <ProductSlider images={images}></ProductSlider>
        </div>
        <div className=" md:col-span-9">
          <Card className=" h-[95%]">
            <CardHeader>
              <CardTitle className=" text-xl">{brand.name}</CardTitle>
              <h2 className=" font-bold text-3xl">{title}</h2>
              <CardDescription className="py-5">{description}</CardDescription>
              <div className="price">
                <p className="font-semibold ">
               <del className=" te text-gray-500 me-2">EGP {price + 100}</del>
               EGP{price}</p>
              </div>
              <div className="Available flex items-center gap-3">
                <h3 className="text-gray-600">in stock</h3>
                <h4 className=" bg-slate-600 text-white rounded-2xl px-3 text-[14px]">Available</h4>
              </div>
              <div className="size my-2">
                <span>Size</span>
                <div className="sizes flex  gap-6">
                  <div className="small bg-black text-white rounded-2xl px-3 cursor-pointer">
                    S
                  </div>
                  <div className="medium bg-gray-200  rounded-2xl px-3 cursor-pointer">
                    M
                  </div>
                  <div className="large  bg-gray-200  rounded-2xl px-3 cursor-pointer">
                    L
                  </div>
                </div>
              </div>

              <AddBtn className="bg-black" id={_id}>
              </AddBtn>

            </CardHeader>
            <CardFooter className=" flex items-center justify-between"></CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
