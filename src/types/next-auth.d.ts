/* eslint-disable @typescript-eslint/no-unused-vars */
import NextAuth from "next-auth"
import { UserData } from "next-auth/providers/42-school"
import { JWT } from "next-auth/jwt"

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */

  interface User{
    userData:{
        name:string,
        role:string,
        email:string
    },
    tokenData:string
  }
  interface Session {
    user:User["userData"]
      /** The user's postal address. */
  }
}


declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    /** OpenID ID Token */
    user:User["userData"]
  }
}