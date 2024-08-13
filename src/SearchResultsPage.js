// SearchResultsPage.js
import React from "react";
import RecipeList from "./RecipeList";
import { useLocation } from "react-router-dom";
import "./RecipesPage.css";

const SearchResultsPage = ({ recipes }) => {
  const query = new URLSearchParams(useLocation().search)
    .get("query")
    .toLowerCase();

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(query)
  );

  return (
    <div className="recipe-page">
      <div className="page-header">
        <h2>Results for "{query}"</h2>
      </div>
      <RecipeList recipes={filteredRecipes} />
    </div>
  );
};

export default SearchResultsPage;
