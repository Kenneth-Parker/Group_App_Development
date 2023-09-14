import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const RecipesPage = () => {
  // const RecipesPage = ( {recipe}) => {

  const { recipe_id } = useParams();
  console.log(recipe_id);
  const apiKey = import.meta.env.VITE_REACT_VAR;

  const [fetchedRecipeObj, setFetchedRecipeObj] = useState(null);
  console.log(fetchedRecipeObj);
  // https://api.spoonacular.com/recipes/{id}/information

  //     `https://api.spoonacular.com/recipes/${recipe_id}/information?includeNutrition=false`
  //https://api.spoonacular.com/recipes/716429/information?apiKey=YOUR-API-KEY&includeNutrition=true.
  // `https://api.spoonacular.com/recipes/${recipe_id}/information??apiKey=${apiKey}&includeNutrition=true`

  const options = {
    method: "GET",
    headers: {
      "x-api-key": apiKey,
    },
  };
  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${recipe_id}/information?&includeNutrition=true`,
      options
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Received recipes data:", data.results);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, []);

  if (!fetchedRecipeObj) {
    return <p>Recipe not found.</p>;
  }

  return (
    <div>
      {/* <h2>{recipe.title}</h2>
        <img src={recipe.image} alt={recipe.title} /> */}
      {/* <p>{recipe.instructions}</p> */}
      <h3>recipe obj {recipe_id}</h3>;
    </div>
  );
};

export default RecipesPage;

// attempt: fetch again, gather by id - render
