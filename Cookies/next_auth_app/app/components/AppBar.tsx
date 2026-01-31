"use client"
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation"

export const AppBar= () => {
    const router = useRouter();
    const session = useSession() ;
    
    return <><button onClick={() => signIn()}>Signin</button>
        <button onClick={() => signOut()}>SignOut</button>
    <div>{JSON.stringify(session.data)}</div></>
}

