import { useState } from 'react';
import ingredients from '../components/pantryitems'

const PantryItemSelector = ({ selectedItems, setSelectedItems }) => {
  const [pantryItems, setPantryItems] = useState(ingredients);

  const toggleItemSelection = (item) => {
    if (selectedItems.includes(item)) {
      // Deselect the item
      setSelectedItems(selectedItems.filter((selected) => selected !== item));
    } else {
      // Select the item
      setSelectedItems([...selectedItems, item]);
    }
  };

  return (
    <div>
      <h4>Select pantry items:</h4>
      <ul>
        {pantryItems.map((item) => (
          <li key={item}>
            <label>
              <input
                type="checkbox"
                checked={selectedItems.includes(item)}
                onChange={() => toggleItemSelection(item)}
              />
              {item}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PantryItemSelector;