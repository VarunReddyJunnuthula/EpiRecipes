import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/search?q=${searchTerm}`);
      console.log(response.data); // Log the response data
      setRecipes(response.data);  // Update the recipes state with the search results
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  return (
    <div>
      <h1>EpiRecipes Search</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for recipes"
      />
      <button onClick={handleSearch}>Search</button>

      {recipes.length > 0 ? (
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe._id}>
              <h3>{recipe._source.title}</h3>
              <p>Ingredients: {recipe._source.ingredients.join(', ')}</p>
              <p>Directions: {recipe._source.directions.join(' ')}</p>
              <p>Rating: {recipe._source.rating}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No recipes found. Please enter a search term.</p>
      )}
    </div>
  );
}

export default App;
