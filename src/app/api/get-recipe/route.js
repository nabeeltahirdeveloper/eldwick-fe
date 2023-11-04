import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";


export async function GET() {
    const client = await clientPromise;
    const db = await client.db();
    const result = await db.collection("recipes").find().toArray();
    const response = new NextResponse(JSON.stringify(result), {
        
        headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-store, max-age=0'
        },
    });

    return response;

    }
    