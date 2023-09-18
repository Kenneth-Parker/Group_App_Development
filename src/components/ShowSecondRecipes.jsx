import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ShoppingForm from "./ShoppingForm";
import "./ShowRecipePage.css";

const ShowSecondRecipes = ({ shoppingList, setShoppingList }) => {
  const { recipeLabel } = useParams();
  console.log(recipeLabel);

  const apiKey = import.meta.env.VITE_REACT_VAR2;
  const appID = import.meta.env.VITE_REACT_VAR2_ID;
  const apiUrl = `https://api.edamam.com/api/recipes/v2?type=public&recipe-details?label=${recipeLabel}&app_id=${appID}&app_key=${apiKey}&to=${numberOfResultsShown}`;
  

  const [fetchedRecipeObj, setFetchedRecipeObj] = useState(null);
  const [toggle, setToggle] = useState(false);
  console.log(fetchedRecipeObj);

  useEffect(() => {
    fetch(apiUrl)
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
  }, [recipe_label, apiKey]);

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

   

      
     
       
  

        <div id="ingredients">
          <h3>Ingredients:</h3>
          {/* <ul>
            {fetchedRecipeObj.extendedIngredients.map((ingredient, index) => (
              <li key={index}>{ingredient.name} </li>
            ))}
          </ul> */}
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

export default ShowSecondRecipes;
