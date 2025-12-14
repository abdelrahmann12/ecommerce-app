"use client";
import Breadcrumb from "@/app/_Component/Breadcrumb/Breadcrumb";
import { ClearCart, getCartData, removeCartProduct, UpdateQuantity } from "@/cartActions";
import { Button } from "@/components/ui/button";
import { Data } from "@/types/CartData";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

export default function Page() {
  const [cart, setCart] = useState<Data>();

  const [countDisapled , setCountDisapled] = useState(false)
  async function getAllCartData() {
    const data = await getCartData();
    console.log(data);
    setCart(data.data)
  }
  

  async function removeProduct(id:string) {
    const data = await removeCartProduct(id);
    console.log(data);
    if (data.status == "success") {
      toast.success("product deleted successfuly");
      setCart(data.data);
    } else {
      toast.error(data.status);
    }
  }

  async function ClearProducts(){
    const data = await ClearCart();
    console.log(data);
    console.log("cart deleted");
    getAllCartData();
  }

  async function UpdateProductQuantity(id:string , count:number){
    console.log(id)
    console.log(count)
    setCountDisapled(true)
    const data = await UpdateQuantity(id , count)
    if(data.status == 'success'){
      setCart(data.data)
    }
    setCountDisapled(false)
  }

  useEffect(() => {
    getAllCartData();
  }, []);

  return (
    <div>
      <Breadcrumb></Breadcrumb>
      <Button onClick={ClearProducts} className=" bg-red-500 ms-[80%] my-4 ">
        Clear Cart
      </Button>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-16 py-3">
                <span className="sr-only">Image</span>
              </th>
              <th scope="col" className="px-6 py-3">
                Product
              </th>
              <th scope="col" className="px-6 py-3">
                Quantity              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {cart?.products.map((item) => {
              return (
                <>
                  {item.price != 0 ? (
                    <tr
                      key={item._id}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                      <td className="p-4">
                        <Image
                          className=""
                          src={item.product.imageCover}
                          alt="product image"
                          height={100}
                          width={100}
                        ></Image>
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        {item.product.title}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <button
                          disabled={countDisapled}
                            onClick={()=>{
                              UpdateProductQuantity(item.product._id , item.count -= 1)
                            }}
                            className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                            type="button"
                          >
                            <span className="sr-only">Quantity button</span>
                            <svg
                              className="w-3 h-3"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 18 2"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M1 1h16"
                              />
                            </svg>
                          </button>
                          <div>
                            <input
                              type="number"
                              id="first_product"
                              className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder={String(item.count)}
                              required
                            />
                          </div>
                          <button
                           disabled={countDisapled}
                           onClick={()=>{
                              UpdateProductQuantity(item.product._id , item.count += 1)
                            }}
                            className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                            type="button"
                          >
                            <span className="sr-only">Quantity button</span>
                            <svg
                              className="w-3 h-3"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 18 18"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 1v16M1 9h16"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        {item.price}
                      </td>
                      <td className="px-6 py-4">
                        <Button
                          onClick={() => {
                            removeProduct(item.product._id);
                          }}
                          className=" bg-red-400"
                        >
                          remove
                        </Button>
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
        </table>
      </div>
      <Button className="ms-[70%] my-4 bg-main"> <Link className=" text-white!" href={`/checkoutsession/` + cart?._id}>CheckoutSession</Link></Button>
    </div>
  );
}
