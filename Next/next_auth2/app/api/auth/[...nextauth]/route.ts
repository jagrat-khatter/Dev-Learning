import NextAuth from "next-auth"
import CredentialsProvider  from "next-auth/providers/credentials"
import TwitterProvider from "next-auth/providers/twitter";


const handler = NextAuth({
    providers: [
        CredentialsProvider({
          // The name to display on the sign in form (e.g. 'Sign in with...')
          name: 'Email',
          // The credentials is used to generate a suitable form on the sign in page.
          // You can specify whatever fields you are expecting to be submitted.
          // e.g. domain, username, password, 2FA token, etc.
          // You can pass any HTML attribute to the <input> tag through the object.
          credentials: {
            username: { label: "Username", type: "text", placeholder: "jsmith" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials, req) {
            return {
                name : "Jagrat" ,
                id : "78" ,
                age : "19" ,
                status : "single"
            }
          }
        }) ,
        TwitterProvider({
            clientId: "sdf",
            clientSecret: "erkghei"
        })
      ],
      secret: process.env.NEXTAUTH_SECRET

})

export { handler as GET, handler as POST }