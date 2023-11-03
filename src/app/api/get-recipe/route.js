// pages/api/recipes.js

import clientPromise from "@/lib/mongodb";

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const client = await clientPromise;
      const db = client.db('recipes'); // Replace with your database name

      const recipes = await db.collection("recipes").find().toArray();
      return res.status(200).json(recipes);
    } catch (e) {
      // Error handling
      return res.status(500).json({ error: e.message });
    }
  }
}
