import { useState , useEffect } from "react";
import axios from 'axios'
import { BACKEND_URL } from "../config";

type UserData = {
    name : string
}

export default function User(){
    const [data , setData] = useState<UserData>();

    useEffect(()=>{
        const fetchData = async () => {
            try{
                const response = await axios.get(`${BACKEND_URL}/user` ,{
                    withCredentials : true
                });
                const data = response.data;
                setData(data);
            }
            catch(err){
                console.error(err)
            }
        }

        fetchData()
     } , [])


    return <div>
        Your id is {data?.name}
        <br></br>
        <button style={{ padding: "10px 20px", fontSize: "16px" }} onClick={()=>{
            axios.get(`${BACKEND_URL}/logout` , {
                withCredentials : true
            });
        }}>Logout</button>
    </div>
}