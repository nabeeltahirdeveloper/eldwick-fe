import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

const client = await clientPromise;
const db = await client.db();

export async function GET() {
    const result = await db.collection("recipes").find().toArray();
    return NextResponse.json(result);
    }
    