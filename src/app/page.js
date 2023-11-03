'use client'



import React, { useEffect, useState } from 'react';
import RecipeList from '../components/RecipeList';
import RecipeForm from '../components/RecipeForm';
import axios from 'axios';

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState();

  const updateRecipe =async (recipe) => {
    console.log("recipe", recipe);
    const result = await axios.post(
      '/api/update-recipe',
      recipe
    );
    setRecipes(recipes.map((r) => (r._id === recipe._id ? recipe : r)));
  }

  async function fetchData() {
    const result = await axios.get(
      '/api/get-recipe'
    );
    setRecipes(result.data);
  }

 useEffect(() => {
  
  fetchData();
  }
  ,[]);


return (
    <div style={{ display: 'flex', background: 'white', color: 'grey' }}>
      <div style={{ flex: 1, border: '1px solid grey', borderRadius: '10px', background: '#f5f5f5' }}>
        <RecipeList recipes={recipes} setSelectedRecipe={setSelectedRecipe} />
      </div>
      <div style={{ flex: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        {selectedRecipe ? (
          <RecipeForm recipe={selectedRecipe} recipes={recipes} setRecipes={updateRecipe} setSelectedRecipe={setSelectedRecipe} fetchData={fetchData} />
        ) : (
          <RecipeForm recipes={recipes} setRecipes={updateRecipe} fetchData={fetchData} />

        )}
      </div>
    </div>
);


}
