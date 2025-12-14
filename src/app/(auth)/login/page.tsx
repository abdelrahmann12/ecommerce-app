
"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
import { getCartData } from "@/cartActions";
import { countContext } from "@/CountProvider";
import { CardData } from "@/types/CartData";
import Breadcrumb from "@/app/_Component/Breadcrumb/Breadcrumb";

export default function Login() {
  const Route = useRouter()
  const CountData = useContext(countContext)

  const LoginScheme = z.object({  
      email: z.email().nonempty(),
      password: z
        .string()
        .nonempty()
        .regex(
          /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
          "enter valid password"
        ),
    })
  const LoginForm = useForm({
    defaultValues: {
      email: "",
      password: "",  
    },
    resolver: zodResolver(LoginScheme),
  });

   async function handleLogin(values: z.infer< typeof LoginScheme>) {
    console.log(values);
   const data = await signIn('credentials',{
      email:values.email,
      password:values.password,
      redirect:false,
      callbackUrl:"/"
    }
    )
    console.log(data)
    if(data?.ok){
      toast.success("login success" ,{position:'top-center'})
      const res = await fetch("/api/get-token");
          const token = await res.json();
      
          console.log("token:", token.token);
          if(token.token) { 
            const CartData:CardData = await getCartData();
            console.log("cart data is", CartData);
            const sum = CartData.data.products.reduce((result , item)=> result += item.count , 0)
            CountData?.setCount(sum)
            console.log("from login count is" , sum , token.token)
          }
          
        
      Route.push("/")
    }else{
      toast.error(data?.error , {position:'top-center'})
    }
    // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/auth/signin`,{
    //   method:"post",
    //   body:JSON.stringify(values),
    //   headers:{
    //     "content-type":"application/json"
    //   }
    // })
    // const data = await res.json();
    // console.log(data)
  }

  return (
    <>
    <Breadcrumb></Breadcrumb>
    <div className=" flex justify-center mt-28  w-full h-96  ">
    
     <Form {...LoginForm}>
      
      <form onSubmit={LoginForm.handleSubmit(handleLogin)} className="w-2/5 space-y-4">
        <h2 className=" pb-6">LOG IN</h2>
        <FormField
          control={LoginForm.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Enter Your Email</FormLabel>
              <FormControl>
                {/* Your form field */}
                <Input type="text" {...field}></Input>
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={LoginForm.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Enter Your Password</FormLabel>
              <FormControl>
                {/* Your form field */}
                <Input type="text" {...field}></Input>
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Link className="" href={"/forgetpassword"}>forget password ?</Link>
        <Button className="bg-black text-white cursor-pointer block w-full">Login</Button>
        
      </form>
     </Form>
     {/* <div className="new-customer">
          <h2>New Customer</h2>
          <p>Sign up for early Sale access plus tailored new arrivals, trends and promotions. To opt out, click unsubscribe in our emails.</p>
          <div className="btn">
            <Button>Register</Button>
          </div>
     </div> */}
    </div>
    </>
    
   
  );
}
