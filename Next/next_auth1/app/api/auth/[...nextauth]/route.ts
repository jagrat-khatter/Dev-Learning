import NextAuth from "next-auth"
import  CredentialsProvider from "next-auth/providers/credentials"
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import AppleProvider from "next-auth/providers/apple";


const handler = NextAuth({
  providers: [
    CredentialsProvider({
        // The name to display on the sign in form (e.g. "Sign in with...")
        name: "Credentials",
        // `credentials` is used to generate a form on the sign in page.
        // You can specify which fields should be submitted, by adding keys to the `credentials` object.
        // e.g. domain, username, password, 2FA token, etc.
        // You can pass any HTML attribute to the <input> tag through the object.
        credentials: {
          username: { label: "Username", type: "text", placeholder: "jagrat@gmail.com" },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials, req) {
          const username = credentials?.username
          const password = credentials?.password

          // let say we do a db check here and get
          const user = {
            name : "jagrat" ,
            age : "19 ",
            id : "22" ,
            status : "single"
          }

          if(user) return user;
          else return null;
        }
      }),

      GoogleProvider({
        clientId: "asd",
        clientSecret:  "asd"
      }),

      GithubProvider({
        clientId: "asd" ,
        clientSecret: "fgt"
      }),

      AppleProvider({
        clientId: "njk" ,
        clientSecret: "erghb"
      })
       
  ] 
})


// Export named handlers for HTTP methods
export { handler as GET, handler as POST };