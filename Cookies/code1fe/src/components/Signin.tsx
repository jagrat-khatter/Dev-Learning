import {useState} from 'react'
import {BACKEND_URL} from '../config'
import axios from 'axios'


export default function Signin(){
    const [username , setUsername] = useState("");
    const [password , setPassword] = useState("");

    return <div>
        <input onChange={(e)=>(setUsername(e.target.value))} placeholder='username' type='text'></input>
        <input onChange={(e)=>(setPassword(e.target.value))} placeholder='password' type='password'></input>
        <button style={{ padding: "10px 20px", fontSize: "16px" }} onClick={async ()=>{
            await axios.post(`${BACKEND_URL}/signin` , {
                username : username,
                password : password
            } , {
                withCredentials : true
            })
        }} >Signin</button>
    </div>

}