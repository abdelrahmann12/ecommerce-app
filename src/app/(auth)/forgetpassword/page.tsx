"use client";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React from "react";
import {  FormProvider, useForm } from "react-hook-form";
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useRouter } from "next/navigation";


const schemeForgetPass = z.object({
  email:z.email().nonempty(),
})



export default function ForgetPassword() {
  const Router = useRouter()
  const loginForm = useForm({
    defaultValues: {
      email: "",
    
    },
    resolver:zodResolver(schemeForgetPass)
  });

  async function handleForgetPass(values:z.infer<typeof schemeForgetPass>) {
    const res = await fetch (`https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`,{
      method:"post",
      body:JSON.stringify(values),
      headers:{
        "content-type":"application/json"
      }
    })
    
    const data = await res.json();
    console.log(data);
    if(data.message = "success"){
      toast.success(" password changed successfly !",{position:"top-center"});
      Router.push("/resetCode")
    }
    
  }

  return (
    <>
    
     <div className=" flex justify-center w-full h-96 items-center">
      
      <FormProvider {...loginForm}>
        <form className=" space-y-3 w-80" onSubmit={loginForm.handleSubmit(handleForgetPass)}>
          <h2>Login page</h2>
          <FormField
            control={loginForm.control}
            name="email"
            render={({field}) => (
              <FormItem>
                <FormLabel>Enter Your Email</FormLabel>
                <FormControl>{/* Your form field */}
                 <Input type="text" {...field}></Input>
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
        
          
         

          <Button className="bg-black text-white w-full">send Code</Button>
        </form>
      </FormProvider>
    </div>
    </>
   
  );
}
