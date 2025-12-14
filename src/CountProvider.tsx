"use client";
import React, { createContext, useEffect, useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { GetTokenValue } from "./getUserToken";
import { getCartData } from "./cartActions";
import { CardData } from "./types/CartData";

type countContextType = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

export const countContext = createContext<countContextType | null>(null);

export default function CountProvider({ children}: {children: React.ReactNode}) {
  const [count, setCount] = useState<number>(0);

  async function cartData() {
    const res = await fetch("/api/get-token");
    const data = await res.json();
    console.log("token:", data.token);
    
    if (data.token) { 
      const CartData:CardData = await getCartData();
      console.log("cart data is", CartData);
      const sum = CartData.data.products.reduce((result , item)=> result += item.count , 0)
      setCount(sum)

    }
  }
  useEffect(() => {
    cartData();
  }, []);

  return (
    <countContext.Provider value={{ count, setCount }}>
      {children}
    </countContext.Provider>
  );
}
