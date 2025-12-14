"use client";
import React, { useContext, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
// import Image from "next/image";
import { useSession } from "next-auth/react";
import { countContext } from "@/CountProvider";
import { User, ShoppingCart,  Menu , CircleX , Heart } from "lucide-react";

const NavArray: { path: string; content: string; protected: boolean }[] = [
  { path: "/", content: "Home", protected: false },
  { path: "/product", content: "Products", protected: false },
  { path: "/categories", content: "Categories", protected: false },
  { path: "/brands", content: "Brands", protected: false },
  // { path: "/wishlist", content: "WishList",protected:false },
  // { path: "/cart", content: "Cart" , protected:true },
];
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const NavArray3: { path: string; content: string }[] = [
  { path: "/", content: "SuperMarkey" },
];
const NavArray2: { path: string; content: string }[] = [
  { path: "/login", content: "Login" },
  { path: "/register", content: "Register" },
  { path: "/logout", content: "Logout" },
];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const data = useSession();
  const count = useContext(countContext);
  console.log("data from context is" , count);
  console.log("data from session is" , data);

  return (
    <NavigationMenu className=" max-w-full flex  justify-between bg-white px-2">
      <NavigationMenuLink>
            <h1 className=" text-4xl">Market X</h1>
          </NavigationMenuLink>
      <NavigationMenuList className="hidden md:flex gap-5">
        <NavigationMenuItem>
          
        </NavigationMenuItem>


        {NavArray.map((item) => {
          return (
            <NavigationMenuItem key={item.path} className=" cursor-pointer">
              <NavigationMenuLink href={item.path}>
                {item.content}
              </NavigationMenuLink>
            </NavigationMenuItem>
          );
        })}
        {/* first nav  */}
      </NavigationMenuList>

      <NavigationMenuList className=" ga-2 hidden md:flex">
        {data.status == "authenticated" ? (
          <NavigationMenuItem>
            <NavigationMenuLink className="flex items-center flex-row border-1 rounded-3xl">
              <User className="!w-6 !h-6 text-black" />
              <span>{data.data?.user.name}</span>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ) : (
          NavArray2.map((item) => {
            return (
              <NavigationMenuItem key={item.path} className=" cursor-pointer">
                <NavigationMenuLink href={item.path}>
                  {item.content}
                </NavigationMenuLink>
              </NavigationMenuItem>
            );
          })
        )}
        <NavigationMenuLink href="/cart">
         <ShoppingCart className="!w-7 !h-7 relative  text-black" />
          <span className=" absolute -top-1 right-14 w-4 h-4 bg-black text-white rounded-full flex items-center justify-center">
             {count?.count}
          </span>
        </NavigationMenuLink>

        <NavigationMenuLink href="/wishlist" className="">
          <Heart className="!w-7 !h-7  text-black" />
        </NavigationMenuLink>
      </NavigationMenuList>
      <Menu
        className="md:hidden"
        onClick={() => {
          setOpen(!open);
        }}
      />

      {open && (
        <>

        <div className=" fixed top-0 right-0  z-10 flex flex-col gap-4 p-4 bg-white shadow-md md:hidden items-center">
          <CircleX onClick={()=>{
            setOpen(false)
          }} className="!text-left self-start" />
          {NavArray.map((item) => (
            <NavigationMenuItem className=" !list-none" key={item.path}>
              <NavigationMenuLink  href={item.path}>
                {item.content}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}

          {data.status === "authenticated" ? (
            <NavigationMenuItem className=" !list-none">
              <NavigationMenuLink className="flex items-center gap-2">
               <User className="!w-8 !h-8 text-black" />
                {data.data?.user.name}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ) : (
            NavArray2.map((item) => (
              <NavigationMenuItem key={item.path}>
                <NavigationMenuLink href={item.path}>
                  {item.content}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))
          )}

          <NavigationMenuLink href="/cart">
          <ShoppingCart className="!w-8 !h-8 relative  text-black" />
          <span className="absolute top-0.5 right-0.5 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
             0
          </span>
        </NavigationMenuLink>

        <NavigationMenuLink href="/wishlist" className="">
          <Heart className="!w-8 !h-8  text-black" />
        </NavigationMenuLink>
        </div>
      </>
      )}
    </NavigationMenu>
    
    
  );

}
