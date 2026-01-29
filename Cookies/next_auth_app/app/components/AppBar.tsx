"use client"
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation"

export const AppBar= () => {
    const router = useRouter();
    const session = useSession() ;
    
    return <><button onClick={() => router.push("/api/auth/signin")}>Signin</button>
    <div>{JSON.stringify(session.data)}</div></>
}

