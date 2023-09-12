import IngredientDropdownList from "./IngredientDropdownList";
import styled from "styled-components";


const StyledButton = styled.button`
  padding: 1px 2.2px;
  background-color: #ae0a0a; /* Green */
  border-radius: em;
  color: white;
  /* padding: 15px 32px; */
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 8px;
`


const PantryItemSelector = ({ selectedItems, setSelectedItems }) => {

  const handleSelect = (selectedIngredient) => {
    setSelectedItems([...selectedItems, selectedIngredient]);
  };

  const handleRemove = (itemToRemove) => {
    const updatedItems = selectedItems.filter((item) => item !== itemToRemove)
    setSelectedItems(updatedItems);
  };

  return (
    <div>
      <h2>Select Ingredients</h2>
      <IngredientDropdownList onSelect={handleSelect} />

      <ul>
        {selectedItems.map((item, index) => (
          <li key={index}>{item} <StyledButton onClick={() => handleRemove(item)}>X</StyledButton></li>
        ))}
      </ul>

      {/* returns selected items underneath dropdown */}
    </div>
  );
};

export default PantryItemSelector;