import React, { useEffect, useState } from "react";
import ingredients from "./pantryitems";
import pantry from "../pantryDb/pantry.json";

const IngredientDropdownList = ( {onSelect}) => {
  const [allIngredients, setAllIngredients] = useState([]);

  useEffect(() => {

    let pantryIngredients;

    if (Array.isArray(pantry.ingredients)) {
      // If pantry.ingredients is already an array, use it as-is
      pantryIngredients = pantry.ingredients;
    } else if (typeof pantry.ingredients === "object") {
      // If pantry.ingredients is an object, stringify and parse it to an array
      pantryIngredients = Object.values(pantry.ingredients);
    } else {
      // If pantry.ingredients is neither an array nor an object, use an empty array
      pantryIngredients = [];
    }

    const combinedIngredients = [
        ...new Set([...ingredients, ...pantryIngredients]),
      ];

    // Set the combined ingredients in the state
    setAllIngredients(combinedIngredients);
  }, []);

  return(
    <select onChange={(e) => onSelect(e.target.value)}>
      {allIngredients.map((ingredient, index) => (
        <option key={index} value={ingredient}>
          {ingredient}
        </option>
      ))}
    </select>
  );
};

export default IngredientDropdownList;
