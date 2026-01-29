"use client"

import axios from "axios"

export default function Signin() {
    return <div className="text-lg w-screen h-screen flex flex-col items-center justify-center gap-2">
            <div className='border p-2'>
                <input type='text' placeholder="username"></input>
                <input type='password' placeholder="password"></input>
            </div>

            <button onClick={()=>{ axios.post('/api/v1/signin')}}>Sign in</button>
    </div>
}