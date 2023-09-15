import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ShoppingForm from "./ShoppingForm";
import "./ShowRecipePage.css";

const ShowRecipePage = ({ shoppingList, setShoppingList }) => {
  const { recipe_id } = useParams();
  console.log(recipe_id);
  const apiKeyx = import.meta.env.VITE_REACT_VAR;

  const [fetchedRecipeObj, setFetchedRecipeObj] = useState(null);
  const [toggle, setToggle] = useState(false);
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

  const toggleShopping = () => {
    setToggle(!toggle);
  };

  if (!fetchedRecipeObj) {
    return (
      <>
        <p>Recipe not found.</p>
        <button onClick={toggleShopping} className="toggle-btn">
          {toggle ? "close" : "open"}
        </button>
        {toggle && (
          <ShoppingForm
            shoppingList={shoppingList}
            setShoppingList={setShoppingList}
          />
        )}
      </>
    );
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
              <li key={index}>{ingredient.name} </li>
            ))}
          </ul>
          <div className="Shopping-Btn">
            <span>
              {" "}
              <p onClick={toggleShopping}>{!toggle ? "Add to your Shopping List" : "close"}</p>
              {" "}
            </span>
          </div>
        </div>
      </article>

      <div>
        <p> Instructions: {fetchedRecipeObj.instructions}</p>
      </div>
      {toggle && (
        <ShoppingForm
          shoppingList={shoppingList}
          setShoppingList={setShoppingList}
        />
      )}
    </div>
  );
};

export default ShowRecipePage;
