

import { useState } from "react";
import ShoppingForm from "./ShoppingForm";

const RecipesPage = () => {
  
    
    const [ toggle, setToggle] = useState(false)
  

    const toggleShopping = () => {
      setToggle(!toggle)
    }

    if (!recipe) {
      return (
        <>
        <p>Recipe not found.</p>
        <button onClick={toggleShopping}
      className="toggle-btn">{toggle?"close":"open"}</button>
      {toggle && (<ShoppingForm/>)}
        </>
        ) 
    }

  
    return (
      <>
      <button onClick={toggleShopping}
      className="toggle-btn">{toggle?"close":"open"}</button>
      {toggle && (<ShoppingForm/>)}
      <div>
        <h2>{recipe.title}</h2>
        <img src={recipe.image} alt={recipe.title} />
        <p>{recipe.instructions}</p>
      </div>
      </>
    );
  };

  export default RecipesPage