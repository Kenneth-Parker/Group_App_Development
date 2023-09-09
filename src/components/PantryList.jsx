const test = console.log; // i make a console.log === test cuz i get lazy typing out c..o...n..
import Pantry from "/Users/xavierrice/Desktop/Module3/Group_App_Development/src/pantryDb/pantry.json";
import { useState, useEffect } from "react";


const PantryList = () => {
  const [pantryItems, setPantryItems] = useState([]);

  useEffect(() => {
    //using use effect so it this happens before the page is loaded.
    setPantryItems(Pantry);
  }, []);

  const ItemsOfPantry = pantryItems.map((obj) => {
    return (
      <h4 id={Object.values(obj)[0]}>
        {Object.keys(obj)[0]}
        <br></br>
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
