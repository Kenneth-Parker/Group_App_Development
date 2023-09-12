import IngredientDropdownList from "./IngredientDropdownList";

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
          <li key={index}>{item} <button onClick={() => handleRemove(item)}>X</button></li>
        ))}
      </ul>

      {/* returns selected items underneath dropdown */}
    </div>
  );
};

export default PantryItemSelector;