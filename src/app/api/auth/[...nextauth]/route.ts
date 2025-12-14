import NextAuth, { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const nextOptions: NextAuthOptions = {
  pages:{
    signIn:"/login"
  },
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/auth/signin`,
          {
            method: "post",
            body: JSON.stringify({
              email:credentials?.email,
              password:credentials?.password
            }),
            headers: {
              "content-type": "application/json",
            },
          }
        );
        const data = await res.json()
        console.log(data);
        if (data.message == "success"){
          return {
            id:"",
            userData:data.user,
            tokenData:data.token

          }
        }else {
            throw new Error("token error")
          }
      },
      
    }),
  ],
  callbacks:{
    async session({ session, token }) {
      session.user = token.user
      return session
    },
    async jwt({ token, user,}) {
     if (user) {
      token.user = user.userData
      token.accessToken = user.tokenData
    }
    return token
    }
  }
};

const handler = NextAuth(
  nextOptions
);

export { handler as GET, handler as POST };
