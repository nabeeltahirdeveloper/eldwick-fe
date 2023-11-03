import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";


// update recipe by id

export async function POST(request) {
    const { id } = await request.json();
    const client = await clientPromise;
    const db = await client.db();

    const result = await db.collection("recipes").deleteOne(
        { _id:new ObjectId(id) },
    );

    return NextResponse.json(result);
}