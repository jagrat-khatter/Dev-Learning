import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation"

// This is custom page for signin not the one provided by next js in default
// When ever something goes wrong in auth user will be redirected to this page 
// not to deafult page of nextjs because we have added page:"/signin" in auth configuration
export function Signin(){
    const router = useRouter();
    let username:string , password:string;

    return <>

    <button onClick={async ()=>{await signIn("google")}}>Signin with google</button>
    <button onClick={async ()=>{await signIn("github")}}>Signin with github</button>
    <input onChange={(e) => username=e.target.value} />
    <input onChange={(e) => password=e.target.value} />
    <button onClick={async ()=>{await signIn("credentials" , {
        username,
        password,
        redirect : false
    })}}>Signin with credentials</button>
    </>
}