import React, { useEffect, useState } from "react";
import ingredients from "./pantryitems";


const IngredientDropdownList = ({ onSelect }) => {
  const [allIngredients, setAllIngredients] = useState([]);

  useEffect(() => {

     setAllIngredients(ingredients);
   }, []);

  return (
    <select onChange={(e) => onSelect(e.target.value)}>
    <option value="">Click Here to Choose</option>
  {allIngredients.map((ingredient, index) => (
    <option key={index} value={ingredient}>
      {ingredient}
    </option>
      ))}
    </select>
  );
};

export default IngredientDropdownList;
