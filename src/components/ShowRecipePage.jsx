import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ShowRecipePage.css";
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
    <div id="recipe-container">
      <article id="info">
        <h2> {fetchedRecipeObj.title}</h2>
        <img src={fetchedRecipeObj.image} alt={fetchedRecipeObj.title} />

        <p>
          {" "}
          <b>Prep Time: </b>
          {fetchedRecipeObj.preperationMinutes}minutes <br />{" "}
          <b>Cooking Time:</b>{" "}
          <em>{fetchedRecipeObj.cookingMinutes} minutes </em> <br />{" "}
          <b>Ready In:</b> {fetchedRecipeObj.readyInMinutes} minutes
          <br /> <b>Servings:</b> {fetchedRecipeObj.servings}
          <br /> <b>Vegan:</b>
          {fetchedRecipeObj.vegan}{" "}
        </p>

        <div id="ingredients">
          <h3>Ingredients:</h3>
          <ul>
            {fetchedRecipeObj.extendedIngredients.map((ingredient, index) => (
              <li key={index}>{ingredient.name}</li>
            ))}
          </ul>
        </div>
      </article>

      <div>
        <p> Instructions: {fetchedRecipeObj.instructions}</p>
      </div>
    </div>
  );
};

export default ShowRecipePage;