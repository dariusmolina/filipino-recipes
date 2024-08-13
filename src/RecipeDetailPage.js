import React from "react";
import { useParams } from "react-router-dom";

const RecipeDetailPage = ({ recipes }) => {
  const { id } = useParams();
  const recipe = recipes.find((recipe) => recipe.id === parseInt(id));

  if (!recipe) {
    return <p>Recipe not found</p>;
  }

  return (
    <div>
      <h2>{recipe.title}</h2>
      {recipe.photo && <img src={recipe.photo} alt={recipe.title} />}
      <p>{recipe.description}</p>
      <h3>Ingredients:</h3>
      <p>{recipe.ingredients}</p>
      <h3>Instructions:</h3>
      <p>{recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetailPage;
