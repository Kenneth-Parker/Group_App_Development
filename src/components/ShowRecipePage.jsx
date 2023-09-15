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
        setFetchedRecipeObj(data)
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
      <p> Instructions: {fetchedRecipeObj.instructions}</p>
      {/* <h3> Ingredients: {fetchedRecipeObj.extendedIngredients}</h3>; */}
    </div>
  );
};

export default ShowRecipePage;
