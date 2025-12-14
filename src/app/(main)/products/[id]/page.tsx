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
    console.log(data);
    return data;
  }
  return (
    <div>
      <div className="grid grid-cols-12">
        <div className=" col-span-3">
          <ProductSlider images={images}></ProductSlider>
        </div>
        <div className=" col-span-9">
          <Card className="h-96">
            <CardHeader>
              <CardTitle className=" text-xl">{brand.name}</CardTitle>
              <h2>{title}</h2>
              <CardDescription className="py-5">{description}</CardDescription>
              <div className="price">
                <p>EGP{price}</p>
              </div>
              <AddBtn  id={_id}>
              </AddBtn>

            </CardHeader>
            {/* <CardContent>
    <p>Card Content</p>
  </CardContent> */}
            <CardFooter className=" flex items-center justify-between"></CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
