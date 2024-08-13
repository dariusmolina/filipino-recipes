// AddRecipePage.js
import React from "react";
import RecipeForm from "./RecipeForm";

const AddRecipePage = ({ setRecipes }) => {
  return (
    <div className="add-recipe-page">
      <h1>Add Your Own Recipe</h1>
      <RecipeForm setRecipes={setRecipes} />
    </div>
  );
};

export default AddRecipePage;
