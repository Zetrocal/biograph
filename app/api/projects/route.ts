import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET() {
    const projects = await prisma.project.findMany();

    return NextResponse.json(projects)
}

export async function POST(request:Request) {
    const data = await request.json();
    return NextResponse.json(data)
}

export function PUT(){

}

export function DELETE(){

}