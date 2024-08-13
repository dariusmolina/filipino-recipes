// RecipeList.js
import React from "react";
import RecipeCard from "./RecipeCard";

const RecipeList = ({ recipes, onDelete }) => {
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          onDelete={onDelete} // Pass deleteRecipe function as onDelete
        />
      ))}
    </div>
  );
};

export default RecipeList;
