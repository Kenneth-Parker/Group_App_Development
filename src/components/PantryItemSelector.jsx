import IngredientDropdownList from "./IngredientDropdownList";
import styled from "styled-components";

const StyledDiv = styled.div`
border: 2px solid grey;
border-radius: 22px;
width: auto;
`;
const StyledUl = styled.ul`
  text-decoration: none;
`;
const StyledButton = styled.button`
  padding: 1px 2.2px;
  background-color: #ae0a0a; 
  /* border-radius: 48%; vote  */
  color: white;
  text-decoration: none;
  display: inline-block;
  font-size: 8px;
`;

const StyledH2 = styled.h2`
  overflow-wrap: break-word;
`

const PantryItemSelector = ({ selectedItems, setSelectedItems }) => {
  const handleSelect = (selectedIngredient) => {
    setSelectedItems([...selectedItems, selectedIngredient]);
  };

  const handleRemove = (itemToRemove) => {
    const updatedItems = selectedItems.filter((item) => item !== itemToRemove);
    setSelectedItems(updatedItems);
  };

  return (
    <StyledDiv>
      <StyledH2>Select Ingredients</StyledH2>
      <IngredientDropdownList onSelect={handleSelect} />

      <ul>
        {selectedItems.map((item, index) => (
          <StyledUl key={index}>
            {item}{" "}
            <StyledButton onClick={() => handleRemove(item)}>X</StyledButton>
          </StyledUl>
        ))}
      </ul>

      {/* returns selected items underneath dropdown */}
    </StyledDiv>
  );
};

export default PantryItemSelector;
