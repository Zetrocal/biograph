import { NextResponse } from "next/server"

export function GET(request:Request, {params}:any){
    return NextResponse.json(params)
}