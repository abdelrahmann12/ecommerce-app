"use server";

import { GetTokenValue } from "./getUserToken";

export async function GetCheckoutSession(cartId: string ,shippingData: {details:string , phone:string , city:string}) {
  const token:unknown = await GetTokenValue();
  if (token) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/orders/checkout-session/${cartId}?url=${process.env.NEXT_PUPLIC_URL}`,
      {
        method: "post",
        body: JSON.stringify({
          "shippingAddress" : shippingData
        }),
        headers:{
            token:String(token),
            'content-type':"application/json"
        }
      }
    );
    const  data = await res.json()
    return data
  }
}
