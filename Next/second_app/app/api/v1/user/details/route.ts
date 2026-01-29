import { NextResponse } from "next/server";

export function GET() {
    return NextResponse.json({
        user: "jagrat" ,
        email: "jagratkhatter@gmail.com"
    })
}