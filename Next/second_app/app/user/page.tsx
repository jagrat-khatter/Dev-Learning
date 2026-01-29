"use client"
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function User(){
    const [loading , setLoading] = useState(true);
    const [data , setData] = useState({});

    useEffect(()=>{
        try{
            const func = async ()=>{
                const response =await axios.get('https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details');
                setData(response.data);
                setLoading(false);
            }
        
            func();
        }
        catch(err){
            setData("Could not fetch data");
            setLoading(false);
        }
    } ,[])

    if(loading) return <>loading</>

    //@ts-ignore
    return <>{(typeof data=="object") ? (data.email) : (data)}</>
}