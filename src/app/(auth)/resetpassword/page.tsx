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
import { useRouter } from "next/navigation";

export default function Login() {
  const Route = useRouter();
  const resetpassScheme = z.object({
    email: z.email().nonempty(),
    newPassword: z
      .string()
      .nonempty()
      .regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, "enter valid password"),
  });

  const LoginForm = useForm({
    defaultValues: {
      email: "",
      newPassword: "",
    },
    resolver: zodResolver(resetpassScheme),
  });

  async function handleLogin(values: z.infer<typeof resetpassScheme>) {
    console.log(values);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/auth/resetPassword`,
      {
        method: "put",
        body: JSON.stringify(values),
        headers: {
          "content-type": "application/json",
        },
      }
    );
    const data = await res.json();
    console.log(data);
    Route.push("/login");
  }

  return (
    <div className="w-full h-screen">
      <Form {...LoginForm}>
        <form className="min-h-screen!" onSubmit={LoginForm.handleSubmit(handleLogin)}>
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
            name="newPassword"
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

          <Button className="bg-main">Reset Password</Button>
        </form>
      </Form>
    </div>
  );
}
