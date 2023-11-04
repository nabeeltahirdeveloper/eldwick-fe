import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";


export async function GET() {
    const client = await clientPromise;
    const db = await client.db();
     // Add try-catch to handle any potential errors
     try {
        const recipes = await db.collection("recipes").find().toArray();
        console.log("Recipes fetched:", recipes); // Log fetched data for debugging

        return new NextResponse(JSON.stringify(recipes), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'no-store, max-age=0',
            },
        });
    } catch (error) {
        console.error("Failed to fetch recipes:", error); // Error logging
        return new NextResponse(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}
    