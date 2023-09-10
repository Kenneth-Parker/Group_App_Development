
const test = console.log
import Pantry from './pantryDb/pantry.json'

import { useState, useEffect } from "react";


const PantryList = ({selectedItem, setSelectedItem}) => {
  const [pantryItems, setPantryItems] = useState([]);

  useEffect(() => {
    //using use effect so it this happens before the page is loaded.
    setPantryItems(Pantry);
  }, []);

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
