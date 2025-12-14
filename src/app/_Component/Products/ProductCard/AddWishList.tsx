"use client";
import { Button } from "@/components/ui/button";
import { WishList } from "@/types/WishListData";
import { AddToWishlist, getAllWishList } from "@/wishListActions";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

export default function AddWishBtn({ id }: { id: string }) {
  const [heart , setHeart] = useState<boolean>(false)
  async function AddToWish(id: string) {
    const data = await AddToWishlist(id);
    console.log(data);
    if (data.status == "success") {
      toast.success(data.message);
      setHeart(true)
    } else {
      toast.error(data.message);
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async function getAllWish(){
     const  wishData:WishList = await getAllWishList() 
     const isInWish = wishData?.data?.some((item)=> item._id === id)
     setHeart(isInWish)
     console.log("wishData" , wishData)
     }
  
  useEffect(()=>{
     
     
     
     
  },[])


  return (
    <>
    <Button
      onClick={() => {
        AddToWish(id);
      }}
    >
      <FontAwesomeIcon icon={faHeart} className={heart ? " text-red-600" : ""} />
      AddToWish
    </Button>

    </>
    
  );
}
