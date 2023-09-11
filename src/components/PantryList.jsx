import { useState, useEffect } from 'react';

const PantryList = ({ selectedItems }) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_REACT_VAR;
    const query = selectedItems.join(','); // Convert selected items to strings to separate data

    setLoading(true);

  function handleOnClick(){
    setSelectedItem([...selectedItem, event.target.value])
  }


  const ItemsOfPantry = pantryItems.map((obj, i) => {
    return (
      <h4 id={i}>
        {Object.keys(obj)[0]}
        <br></br>
        <button id={Object.values(obj)[0]} value={Object.keys(obj)[0]} onClick={handleOnClick}></button>
        <hr></hr>
      </h4>
    );
  }); //mapping through my array of objs and using Object.keys to get the name of the item. [0] selects just the string.

  return (
    <div>
      <h4>{ItemsOfPantry}</h4>
    </div>
  );
};

export default PantryList;
