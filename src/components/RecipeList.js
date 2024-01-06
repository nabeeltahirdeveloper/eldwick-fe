'use client'



import React from 'react';
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});


export default function RecipeList({ recipes, setSelectedRecipe }) {
  return (
    <div style={{backgroundColor:"lightgrey"}} className={`left-panel ${poppins.className}`}>
    {recipes.map((recipe, index) => (
        <div key={index} className="recipe-list-item" onClick={() => setSelectedRecipe(recipe)}>
            <span className="recipe-name">{recipe.batchNo}</span>
            <span className="recipe-date">{new Date(recipe.lastUpdated).toLocaleDateString()}</span>
        </div>
    ))}
</div>

  );
}
