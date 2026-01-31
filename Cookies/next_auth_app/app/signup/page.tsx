import { getServerSession } from "next-auth"
import { NEXT_AUTH_CONFIG } from "../lib/auth";
export default async function (){
    const session =await getServerSession(NEXT_AUTH_CONFIG);
    return <>
        <div> Signup</div>
        <input placeholder="username" type="text"></input>
        <input placeholder="password" type="password" /> 
        <div>{JSON.stringify(session)}</div>
    </>

}