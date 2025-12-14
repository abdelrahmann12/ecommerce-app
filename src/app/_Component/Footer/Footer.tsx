import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"
import React from "react";
import Image from "next/image";
import logoImg from "./../../../../public/images/credit-logo-png-6648902.png"

export default function Footer() {
  return (
    <>
      <footer className=" flex flex-col text-center gap-4 flex-wrap items-center p-0 py-3 md:()  bg-gray-50 lg:( flex-row   justify-between p-6)">
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
        <div className="flex flex-col m-auto py-3  lg:( flex-row w-full max-w-sm items-center gap-2 py-5)">
          <Input type="email" placeholder="Email" />
          <Button className=" w-full bg-black text-white md:(w-fit) lg:w-fit" type="submit" variant="outline">
            Subscribe
          </Button>
        </div>
      </div>
    </footer>
    <div className="bottom-footer flex flex-col gap-2  bg-gray-50 flex-wrap  md:flex-row md:justify-between">
      <span>© Glowing 2025 | Powered by Shopify</span>

      <div className="img">
        <Image src={logoImg} height={180} width={180} alt="logo-img"></Image>
      </div>
    </div>
    </>
    
  );
}
