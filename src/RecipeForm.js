import React, { useState } from "react";
import "./RecipeForm.css";

const RecipeForm = ({ setRecipes, addRecipe }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [category, setCategory] = useState("");
  const [photo, setPhoto] = useState(null);
  const [instructions, setInstructions] = useState("");

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result); // Set base64 string
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = {
      id: Date.now(),
      title,
      category,
      description,
      ingredients,
      instructions,
      photo: photo || null, // Save base64 string
    };
    setRecipes((prevRecipes) => {
      const updatedRecipes = [...prevRecipes, newRecipe];
      localStorage.setItem("recipes", JSON.stringify(updatedRecipes)); // Save to local storage
      return updatedRecipes;
    });
    setTitle("");
    setDescription("");
    setIngredients("");
    setCategory("");
    setPhoto(null);
    setInstructions("");
  };

  return (
    <form onSubmit={handleSubmit} className="recipe-form">
      <h2>Add Your Recipe!</h2>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="" disabled>
          Category
        </option>
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
        <option value="dessert">Dessert</option>
      </select>
      <input
        type="text"
        placeholder="Recipe Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Recipe Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <textarea
        placeholder="Ingredients (Ex: 1/4 Cup of water)"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
      />
      <textarea
        placeholder="Instructions (Numbered and separated by line)"
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
      />
      <input type="file" onChange={handlePhotoChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default RecipeForm;
