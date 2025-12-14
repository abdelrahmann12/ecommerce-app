"use client";
import { Button } from "@/components/ui/button";
import {
    Form,
  FormControl,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import React from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {  FormProvider, useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";

const schemeResetCode = z.object({
  resetCode: z.string().nonempty(),
});

export default function Login() {
  const Router = useRouter();
  const loginForm = useForm({
    defaultValues: {
      resetCode: "",
    },
    resolver: zodResolver(schemeResetCode),
  });

  async function handleResetCode(values: z.infer<typeof schemeResetCode>) {
    const res = await fetch(
      `https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode`,
      {
        method: "post",
        body: JSON.stringify(values),
        headers: {
          "content-type": "application/json",
        },
      }
    );

    const data = await res.json();
    console.log(data);

    if (data.status == "Success") {
      toast.success("write your new password  !", { position: "top-center" });
      Router.push("/resetpassword");
    } else {
      toast.error(data.message);
    }
  }

  return (
    <div className="w-full h-screen flex items-center justify-center flex-col ">
      <h2 className=""></h2>
      <Form {...loginForm}>
        <form
          className="space-y-3"
          onSubmit={loginForm.handleSubmit(handleResetCode)}
        >
          <FormField
            control={loginForm.control}
            name="resetCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Enter Reset Code</FormLabel>
                <FormControl>
                  <InputOTP
                    maxLength={6}
                    {...field}
                    pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
                  >
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="bg-main w-full">
            Confirm Code
          </Button>
        </form>
      </Form>
    </div>
  );
}
