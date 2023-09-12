import { useState, useEffect } from "react";

const PantryList = ({ selectedItems }) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_REACT_APP_XSPOON_API_KEY;
    const query = selectedItems.join(','); // Convert selected items to strings to separate data
    // const apiKey = import.meta.env.VITE_REACT_VAR;
    // const query = selectedItems.join(","); // Convert selected items to strings to separate data


    setLoading(true);

    // Check if there are selected ingredients
    if (selectedItems.length === 0) {
      setRecipes([]);
      setLoading(false);
      return;
    }

    fetch(
      `https://api.spoonacular.com/recipes/complexSearch?query=${query}&addRecipeInformation=true&apiKey=${apiKey}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setRecipes(data.results);
        setLoading(false);
        console.log("Received recipes data:", data.results);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        setLoading(false);
      });
  }, [selectedItems]);

  const renderRecipes = () => {
    if (loading) {
      return <p>Loading...</p>;
    } else if (recipes.length === 0) {
      return <p>No recipes found for selected items.</p>;
    } else {
      return (
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe.id}>
              <h4>{recipe.title}</h4>
              <img src={recipe.image} alt={recipe.title} />
              <a href={recipe.sourceUrl}>
                <br />
                Recipe Instructions for {recipe.title} 
              </a>
            </li>
          ))}
        </ul>
      );
    }
  };

  console.log("PantryList component rendered");

  return (
    <div>
      <h4>Recipes based on selected pantry items:</h4>
      {renderRecipes()}
    </div>
  );
};

export default PantryList;
