import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ShowRecipePage = () => {
  const { recipe_id } = useParams();
  console.log(recipe_id);
  const apiKeyx = import.meta.env.VITE_REACT_VAR;

  const [fetchedRecipeObj, setFetchedRecipeObj] = useState(null);
  console.log(fetchedRecipeObj);

  useEffect(() => {
    fetch(`https://api.spoonacular.com/recipes/${recipe_id}/information?apiKey=${apiKeyx}&includeNutrition=false
      `)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Received recipes data:", data.results);
        setFetchedRecipeObj(data);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, [recipe_id, apiKeyx]);

  if (!fetchedRecipeObj) {
    return <p>Recipe not found.</p>;
  }

  return (
    <div>
      <h2> {fetchedRecipeObj.title}</h2>
      <img src={fetchedRecipeObj.image} alt={fetchedRecipeObj.title} />
      <p>
        {" "}
        Prep Time: {fetchedRecipeObj.preperationMinutes}minutes <br /> Cooking
        Time: <em>{fetchedRecipeObj.cookingMinutes} minutes </em> <br /> Ready
        In: {fetchedRecipeObj.readyInMinutes} minutes
        <br /> Servings: {fetchedRecipeObj.servings}
        <br /> Vegan: {fetchedRecipeObj.vegan}{" "}
      </p>

      <div>
        <h3>Ingredients:</h3>
        <ul>
          {fetchedRecipeObj.extendedIngredients.map((ingredient, index) => (
            <li key={index}>{ingredient.name}</li>
          ))}
        </ul>
      </div>
      <p> Instructions: {fetchedRecipeObj.instructions}</p>
    </div>
  );
};

export default ShowRecipePage;
