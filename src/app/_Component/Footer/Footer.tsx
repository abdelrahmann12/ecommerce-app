import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"
import React from "react";
import Image from "next/image";
import logoImg from "./../../../../public/images/credit-logo-png-6648902.png"

export default function Footer() {
  return (
    <>
      <footer className=" flex flex-col justify-center text-center gap-4 flex-wrap  p-0 py-3 md:flex-row md:justify-around  bg-gray-50 lg:flex-row">
      <div className="block1 ">
        <h2 className=" text-2xl  py-1">Company</h2>
        <ul className=" flex flex-col gap-2 ">
          <li className=" text-neutral-500">
            Find a location nearest you.<br></br> See Our Stores
          </li>
          <li className=" text-neutral-500">
            +391 (0)35 2568 4593 <br></br> hello@domain.com
          </li>
        </ul>
      </div>

      <div className="block2">
        <h2 className=" text-2xl  py-1">Useful Links</h2>
        <ul className=" flex flex-col gap-2 ">
          <li className=" text-neutral-500">New Products</li>
          <li className=" text-neutral-500">Best Sellers</li>
          <li className=" text-neutral-500">Bundle & Save</li>
          <li className=" text-neutral-500">Online Gift Card</li>
        </ul>
      </div>
      <div className="block3">
        <h2 className=" text-2xl  py-1">Information</h2>
        <ul className=" flex flex-col gap-2 ">
          <li className=" text-neutral-500">New Products</li>
          <li className=" text-neutral-500">Best Sellers</li>
          <li className=" text-neutral-500">Bundle & Save</li>
          <li className=" text-neutral-500">Online Gift Card</li>
        </ul>
      </div>
      <div className="block4">
        <h2 className=" text-2xl  py-1">Good emails</h2>
        <p className=" text-neutral-500">
          Enter your email below to be the first to know about new collections
          and product launches.
        </p>
        <div className="flex flex-col w-80 gap-2 m-auto py-3 md:flex-row  lg:flex-row">
          <Input type="email" placeholder="Email" />
          <Button className=" w-full bg-black text-white md:w-fit lg:w-fit" type="submit" variant="outline">
            Subscribe
          </Button>
        </div>
      </div>
    </footer>
    <div className="bottom-footer flex flex-col gap-2 items-center  bg-gray-50 flex-wrap  md:flex-row md:justify-between">
      <span>© Glowing 2025 | Powered by Shopify</span>

      <div className="img">
        <Image src={logoImg} height={180} width={180} alt="logo-img"></Image>
      </div>
    </div>
    </>
    
  );
}
