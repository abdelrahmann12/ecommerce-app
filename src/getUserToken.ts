
import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";

export async function GetTokenValue(){
   const cookiesData =  await cookies()
   console.log("All cookies:", cookiesData.getAll());
   const encryotToken=  cookiesData.get('next-auth.session-token')?.value
   
  const token = await decode({token:encryotToken , secret:process.env.AUTH_SECRET!})
  console.log("token is " , token)
  return token?.accessToken
  
}