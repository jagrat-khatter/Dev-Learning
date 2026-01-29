import { getServerSession } from "next-auth"
export default function (){
    const session = getServerSession();
    return <>
        <div> Signup</div>
        <input placeholder="username" type="text"></input>
        <input placeholder="password" type="password" /> 
        <div>{JSON.stringify(session)}</div>
    </>

}