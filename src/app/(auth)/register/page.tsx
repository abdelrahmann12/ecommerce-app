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
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

export default function Register() {

  const RegisterScheme = z.object({
      name: z.string().nonempty(),
      email: z.email().nonempty(),
      password: z
        .string()
        .nonempty()
        .regex(
          /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
          "enter valid password"
        ),
      rePassword: z
        .string()
        .nonempty()
        .regex(
          /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
          "enter valid password"
        ),
      phone: z.string().nonempty(),
    })
    .refine(
      (obj) => {
        return obj.password == obj.rePassword;
      },
      { path: ["rePassword"], error: "Confirm Password not match" }
    );

  const RegisterForm = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
      
    },
    resolver: zodResolver(RegisterScheme),
  });

   async function handleRegister(values: z.infer< typeof RegisterScheme>) {
    console.log(values);
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/auth/signup`,{
      method:"post",
      body:JSON.stringify(values),
      headers:{
        "content-type":"application/json"
      }
    })
    const data = await res.json();
    console.log(data)
  }

  return (
    <div className="flex justify-center mt-28  w-full h-screen">
       <Form {...RegisterForm}>
      <form onSubmit={RegisterForm.handleSubmit(handleRegister)} className="w-2/5">
        <FormField
          control={RegisterForm.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Enter your name</FormLabel>
              <FormControl>
                <Input {...field} type="text"></Input>
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={RegisterForm.control}
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
          control={RegisterForm.control}
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
        <FormField
          control={RegisterForm.control}
          name="rePassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Enter Your Password Again</FormLabel>
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
          control={RegisterForm.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Enter Your Phone</FormLabel>
              <FormControl>
                {/* Your form field */}
                <Input type="text" {...field}></Input>
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="bg-main">Register</Button>
      </form>
    </Form>
    </div>
   
  );
}
