
import { NextRequest, NextResponse } from "next/server";
import client from '../../../lib/db'
// this clinet is being imported from 

export async function POST(req :NextRequest){
    const data = await req.json(); // in traditional express we use to use express.json() as middleware

    console.log(data);
    await client.user.create({
        data:{
            username : data.username ,
            password : data.password
        }
    })
    

    return NextResponse.json({
        message : "You have been signed up"
    })
}

export async function GET(req :NextRequest){
    const data = await req.json();

}