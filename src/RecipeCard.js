import React from "react";
import { useNavigate } from "react-router-dom";
import "./RecipeCard.css";

const RecipeCard = ({ recipe, onDelete }) => {
  const navigate = useNavigate();

  const handleDelete = () => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this recipe?"
    );
    if (isConfirmed) {
      onDelete(recipe.id);
    }
  };

  const handleViewFullRecipe = () => {
    navigate(`/recipes/${recipe.id}`);
  };

  return (
    <div className="recipe-card">
      {recipe.photo && <img src={recipe.photo} alt={recipe.title} />} {}
      <div className="recipe-card-body">
        <h4>{recipe.title}</h4>
        <div className="recipe-card-footer">
          <button onClick={handleViewFullRecipe}>View Full Recipe</button>
          <button onClick={handleDelete}>Delete Recipe</button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
