import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Navbar from "./Navbar";
import RecipeForm from "./RecipeForm";
import RecipeList from "./RecipeList";
import RecipeDetailPage from "./RecipeDetailPage"; // Import RecipeDetailPage
import AboutPage from "./AboutPage";
import SearchResultsPage from "./SearchResultsPage"; // Import SearchResultsPage
import Signup from "./Signup"; // Import the Signup component
import "./App.css";

const App = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const savedRecipes = JSON.parse(localStorage.getItem("recipes")) || [];
    setRecipes(savedRecipes);
  }, []);

  const addRecipe = (newRecipe) => {
    const updatedRecipes = [...recipes, newRecipe];
    setRecipes(updatedRecipes);
    localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
  };

  const deleteRecipe = (id) => {
    const updatedRecipes = recipes.filter((recipe) => recipe.id !== id);
    setRecipes(updatedRecipes);
    localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
  };

  const handleSearch = (query) => {
    // Navigate to search results page
    // This requires using useNavigate hook in Navbar or handling navigation in Navbar directly
  };

  return (
    <Router>
      <div className="app">
        <Navbar onSearch={handleSearch} />
        <Routes>
          <Route
            path="/add-your-recipe"
            element={
              <RecipeForm setRecipes={setRecipes} addRecipe={addRecipe} />
            }
          />
          <Route
            path="/recipes"
            element={<RecipeList recipes={recipes} onDelete={deleteRecipe} />}
          />
          <Route
            path="/recipes/:id"
            element={<RecipeDetailPage recipes={recipes} />}
          />
          <Route path="/about" element={<AboutPage />} />
          <Route
            path="/search"
            element={<SearchResultsPage recipes={recipes} />}
          />
          <Route path="/auth" element={<Signup />} /> {/* Add this new route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
