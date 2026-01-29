"use client"
import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <SessionProvider>
          <Real />
      </SessionProvider>
    </div>
  );
}


function Real(){
  const {data : session , status} = useSession();

  return (<div>
    {JSON.stringify(session)}
    {status === 'authenticated' ? (<button onClick={() => signOut()} className="cursor-pointer">Logout</button>) :
    (<button onClick={() => signIn()} className="cursor-pointer">Sign in</button>)}
    </div>)
  
}
