import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export function GET(req : Request , args : any){
    const session = getServerSession;
    return NextResponse.json({
        session
    })
}