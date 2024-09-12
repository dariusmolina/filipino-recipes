import React, { useState } from "react";
import "./RecipeForm.css";
import { db } from "./firebase"; // Import Firestore
import { collection, addDoc } from "firebase/firestore"; // Import Firestore functions

const RecipeForm = ({ setRecipes }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [category, setCategory] = useState("");
  const [photo, setPhoto] = useState(null);
  const [instructions, setInstructions] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newRecipe = {
      title,
      description,
      ingredients,
      category,
      instructions,
      photo,
    };

    try {
      // Add the new recipe to Firestore
      await addDoc(collection(db, "recipes"), newRecipe);
      alert("Recipe added successfully!");

      // Clear the form fields
      setTitle("");
      setDescription("");
      setIngredients("");
      setCategory("");
      setInstructions("");
      setPhoto(null);
    } catch (error) {
      console.error("Error adding recipe:", error);
      alert("Failed to add recipe. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="recipe-form">
      <h2>Add a New Recipe</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Recipe Title"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Recipe Description"
        required
      />
      <textarea
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        placeholder="Ingredients (one per line)"
        required
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      >
        <option value="">Select a category</option>
        <option value="appetizer">Appetizer</option>
        <option value="main">Main Course</option>
        <option value="dessert">Dessert</option>
        <option value="beverage">Beverage</option>
      </select>
      <textarea
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
        placeholder="Cooking Instructions"
        required
      />
      <input
        type="file"
        onChange={(e) => setPhoto(e.target.files[0])}
        accept="image/*"
      />
      <button type="submit">Submit Recipe</button>
    </form>
  );
};

export default RecipeForm;
