import { ProductData, Products } from "@/types/Products";
import Productcard from "./_Component/Products/ProductCard/Productcard";
import MainSlider from "./_Component/MainSlider/MainSlider";
import { GetTokenValue } from "@/getUserToken";

import { Package } from 'lucide-react';
import { CreditCard } from 'lucide-react';
import { MessagesSquare } from 'lucide-react';
import { Wheat } from 'lucide-react';





export default async function Home() {
  
    const res =  await fetch(`https://ecommerce.routemisr.com/api/v1/products`,{
      method:"get",
    })
    const data:Products = await res.json()
    const productsData:ProductData[] =  data.data;
    const token = await GetTokenValue()
    console.log("token is" , token)
  
 

  return (
   <div className=" flex flex-col ">
    
    <div className="h-96 mb-32 ">
      <MainSlider></MainSlider>
    </div>
    <div className="heading text-center py-4">
      <h2 className=" text-4xl font-bold">Our Featured Products</h2>
      <p className="text-xl text-gray-500">Get the skin you want to feel</p>
    </div>
    <div className="  products flex flex-wrap justify-around py-10 gap-4 sm:p-0 ">
         {productsData.map((product)=>{
        return <Productcard key={product._id} product={product}></Productcard>
      })}
    </div>

    <div className="market-support flex items-center justify-center py-20  flex-wrap gap-10 lg:( justify-between)">
      <div className="box1 flex items-center flex-col justify-center text-center">
        <Package size={60}></Package>
        <div className="info">
          <h2 className=" text-xl py-2">Free Shipping</h2>
          <p className=" text-gray-500">Free Shipping for orders over $130</p>
        </div>    
      </div>
      <div className="box1 flex items-center flex-col justify-center text-center">
        <Wheat size={60}></Wheat>
        <div className="info">
          <h2 className=" text-xl py-2">Returns</h2>
          <p className=" text-gray-500">Within 30 days for an exchange.</p>
        </div>    
      </div>
      <div className="box1 flex items-center flex-col justify-center text-center ">
        <MessagesSquare size={60}></MessagesSquare>
        <div className="info">
          <h2 className=" text-xl py-2">Online Support</h2>
          <p className=" text-gray-500">24 hours a day, 7 days a week</p>
        </div>    
      </div>
      <div className="box1 flex items-center flex-col justify-center text-center">
        <CreditCard size={60}></CreditCard>
        <div className="info">
          <h2 className=" text-xl py-2">Flexible Payment</h2>
          <p className=" text-gray-500">Pay with Multiple Credit Cards</p>
        </div>    
      </div>

    </div>
   </div>
  );
}
