"use client"
import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();
import axios from "axios"
import { useState } from "react"

async function getUserDetails(){
    try{
        const user = await client.user.findFirst({});
        return {
            name: user?.username,
            email: user?.password
        }
    }
    catch(e){
        console.log(e);
    }
}

export default async function Signup() {
    const [username , setUsername] = useState("");
    const [password , setPassword] = useState("");
    // In this state variable way this is slightly unoptimal 
    // we can use refs here also 
    // we can use library here react-hook-forms

    const details = await getUserDetails() ;
    // we can get the details of user this way also this is optimized way 
    // no need of creating a seprate endpoint and this async part and things that 
    // are not react components are not even visibble to client these things run on 
    // server only and final html is splitted out to client

    return <div className="text-lg w-screen h-screen flex flex-col items-center justify-center gap-2">
            <div className='border p-2'>
                <input type='text' placeholder="username" onChange={e => setUsername(e.target.value)}></input>
                <input type='password' placeholder="password" onChange={e => setPassword(e.target.value)}></input>
            </div>

            <button onClick={()=>{ axios.post('/api/v1/signup' , {
                username,
                password
            })}}>Sign up</button>
    </div>
}