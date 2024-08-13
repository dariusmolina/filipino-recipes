import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = () => {
    navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <nav className="navbar">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Filipino Recipe Blog
        </Link>
        <div className="navbar-items">
          <Link className="nav-link" to="/recipes">
            Recipes
          </Link>
          <Link className="nav-link" to="/add-your-recipe">
            Add Your Recipe
          </Link>
          <Link className="nav-link" to="/about">
            About
          </Link>
          <div className="search-container">
            <input
              type="text"
              className="search-bar"
              placeholder="Search recipes..."
              value={searchTerm}
              onChange={handleSearchChange}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSearchSubmit();
              }}
            />
            <button className="search-button" onClick={handleSearchSubmit}>
              <span className="sr-only">Search</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
