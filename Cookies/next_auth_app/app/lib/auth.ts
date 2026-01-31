import NextAuth from "next-auth";
import CredentialsProvider  from "next-auth/providers/credentials";
import Github from "next-auth/providers/github";
import page from "../signup/page";
type CustomUser = {
    id: String,
    username: String,
    email: String
}

export const NEXT_AUTH_CONFIG = {
    providers:[
        CredentialsProvider({
            name: "Credentials" ,
            credentials :{
                username : {label: "Username" , type: "text" , placeholder: "Jagrat K"} ,
                password : {label: "Password" , type: "password"} 
            },
            async authorize(credentials , req){
                const user  = {id:"1" , username:"Smith" , email: "jsmith@gamil.com"};
                
                if(user) return user;
                else return null;
            }
        }),
        Github({
            clientId : process.env.GITHUB_CLIENTID ?? "",
            clientSecret : process.env.GITHUB_SECRET ?? ""
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async jwt({token , user} : any){
            if(user){
                const u = user as unknown as CustomUser;
                token.id = u.id;
                token.username = u.username;
            }
            console.log(token)
            return token;
        },
        async session({session , user , token} : any){
            
            if(session.user){
                session.user.id = token.id;
                session.user.username = token.username;
            }
            console.log(session);
            return session
        }
    },
    page : "/signin"
}