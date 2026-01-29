'use client'
import { useState } from "react";

export default function (){
    const [count , setCount] = useState(0);

    return <>
    <button onClick={()=>setCount(x => x+1)} >Click me {count}</button>
    </>
}