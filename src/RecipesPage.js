import React, { useState, useEffect } from "react";
import RecipeList from "./RecipeList"; // A component to render the recipes
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase"; // Import Firestore

const RecipesPage = () => {
  const [recipes, setRecipes] = useState([]);

  // Fetch recipes from Firestore
  useEffect(() => {
    const fetchRecipes = async () => {
      const querySnapshot = await getDocs(collection(db, "recipes"));
      const fetchedRecipes = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setRecipes(fetchedRecipes);
    };

    fetchRecipes();
  }, []); // Empty dependency array ensures it runs once after mount

  return (
    <div className="recipe-page">
      <h2>All Recipes</h2>
      <RecipeList recipes={recipes} /> {/* Pass recipes to the list component */}
    </div>
  );
};

export default RecipesPage;
