import { useState } from 'react';
import IngredientDropdownList from "./IngredientDropdownList";

const PantryItemSelector = ({ selectedItems, setSelectedItems }) => {

  const handleSelect = (selectedIngredient) => {
    setSelectedItems([...selectedItems, selectedIngredient]);
  };

  return (
    <div>
      <h2>Select Ingredients</h2>
      <IngredientDropdownList onSelect={handleSelect} />
      <ul>
        {selectedItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default PantryItemSelector;




