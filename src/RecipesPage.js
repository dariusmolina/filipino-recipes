// RecipesPage.js
import React from "react";
import RecipeList from "./RecipeList";
import "./RecipesPage.css";

const RecipesPage = ({ recipes, searchQuery }) => {
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="recipe-page">
      <div className="page-header">
        <h2>All Recipes</h2>
      </div>
      <RecipeList recipes={filteredRecipes} />
    </div>
  );
};

export default RecipesPage;
