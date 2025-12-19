"use client";
import { WishList } from "@/types/WishListData";
import { getAllWishList } from "@/wishListActions";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Breadcrumb from "@/app/_Component/Breadcrumb/Breadcrumb";
import AddBtn from "@/app/_Component/Products/ProductCard/AddBtn";
import { Star } from "lucide-react";
import RemoveWishBtn from "@/app/_Component/Products/ProductCard/RemoveWishBtn";

export default function Page() {
  const [wishList, setWishList] = useState<WishList>();

  async function getWishData() {
    const WishData = await getAllWishList();
    console.log("wish is", WishData);
    setWishList(WishData);
  }

  useEffect(() => {
    getWishData();
  }, []);

  return (
    <div>
      <Breadcrumb></Breadcrumb>
      <div className="relative py-5 shadow-md sm:rounded-lg">
        {wishList?.data.map((wish) => {
          return (
            <div
              key={wish._id}
              className="wish-table flex flex-col items-center md:flex-row  md:justify-between flex-wrap"
            >
              <div className="left-side flex gap-2 items-center">
                <div className="img">
                  <Image
                    className="w-[100px] sm:w-[300px] md:w-[200px]"
                    src={wish.imageCover}
                    width={200}
                    height={200}
                    alt="product-image"
                    sizes="(max-width: 640px) 150px,
                          (max-width: 1024px) 500px,
                           600px"
                  ></Image>
                </div>
                <div className="product-details space-y-1">
                  <h2>{wish.title}</h2>
                  <p>{wish.price} $</p>
                  <h3 className=" flex items-center gap-1">
                    <Star className=" w-5 fill-yellow-300" />
                    {wish.ratingsAverage}
                  </h3>
                </div>
              </div>
              <div className="right-side flex items-center flex-row md:flex-col gap-8 lg:( flex-row)">
                <AddBtn id={wish._id}></AddBtn>
                <RemoveWishBtn id={wish._id}></RemoveWishBtn>
              </div>
            </div>
          );
        })}

        {/* <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-16 py-3">
                <span className="sr-only">Image</span>
              </th>
              <th scope="col" className="px-6 py-3">
                Product
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {wishList?.data?.map((wish) => {
              return (
                <>
                  {wish.price != 0 ? (
                    <tr
                      key={wish._id}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                      <td className="p-4">
                        <Image
                          className=""
                          src={wish.imageCover}
                          alt="product image"
                          height={100}
                          width={100}
                        ></Image>
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        {wish.brand.name}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                        
                         
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        d
                      </td>
                    </tr>
                  ) : (
                    <div
                      className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                      role="alert"
                    >
                      <span className="font-medium"> Danger alert! </span> Change
                      a few things up and try submitting again.
                    </div>
                  )}
                </>
              );
            })}
          </tbody>
        </table> */}
      </div>
    </div>
  );
}
