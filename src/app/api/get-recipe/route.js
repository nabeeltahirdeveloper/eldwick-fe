import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";


export async function POST() {
    const client = await clientPromise;
    const db = await client.db();
    const result = await db.collection("recipes").find().toArray();
    return NextResponse.json(result);
    }
    