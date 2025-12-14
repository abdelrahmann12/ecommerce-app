"use client";
import { Button } from "@/components/ui/button";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { GetCheckoutSession } from "@/orderActions";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod"

export default function Page() {
  const {cartId} = useParams();
  console.log("id is" , cartId)

  const CheckoutSchema = z.object({
  details: z.string().nonempty(),
  phone: z.string().nonempty(),
  city: z.string().nonempty(),
});


  const checkForm = useForm({
    defaultValues: {
      details: "details",
      phone: "01010700999",
      city: "Cairo",
    },
    resolver:zodResolver(CheckoutSchema)
  });



  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function CheckOutSession(values:any) {
    console.log(values);
    const data = await GetCheckoutSession(String(cartId) , values )
    console.log(data)
    if(data.status == "success"){
      window.location.href = data.session.url
    }
    else {
      throw new Error(data.status)
    }
  }

  return (
    <div>
      Checkout Session
      <Form {...checkForm}>
        <form onSubmit={checkForm.handleSubmit(CheckOutSession)}>
          <FormField
            control={checkForm.control}
            name="details"
            render={({ field }) => (
              <FormItem>
                <FormLabel />
                <FormControl>
                  <Input {...field}/>
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={checkForm.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel />
                <FormControl>
                  <Input {...field}/>
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={checkForm.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel />
                <FormControl>
                 <Input {...field}/>
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
          <Button>Payment now</Button>

        </form>
      </Form>
      
    </div>
  );
}
