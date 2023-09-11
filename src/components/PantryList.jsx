const test = console.log;
import Pantry from "../pantryDb/pantry.json";
import { useState, useEffect } from "react";
import styled from "styled-components";

const Styledh4 = styled.h4`
border: 2px solid green;

display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 10px;

  @media (min-width: 768px) {
    /* tablets and larger screens */
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
  }

  @media (min-width: 1024px) {
     /* desktops  */
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 30px;
  }
`;
const PantryList = ({ selectedItem, setSelectedItem }) => {
  const [pantryItems, setPantryItems] = useState([]);

  useEffect(() => {
    //using use effect so it this happens before the page is loaded.
    setPantryItems(Pantry);
  }, []);

  function handleOnClick() {
    setSelectedItem([...selectedItem, event.target.value]);
  }

  const ItemsOfPantry = pantryItems.map((obj, i) => {
    return (
      <h4 id={i}>
        {Object.keys(obj)[0]}
        <br></br>
        <button
          id={Object.values(obj)[0]}
          value={Object.keys(obj)[0]}
          onClick={handleOnClick}
        ></button>
        <hr></hr>
      </h4>
    );
  }); //mapping through my array of objs and using Object.keys to get the name of the item. [0] selects just the string.

  return (
    <div>
      <Styledh4>{ItemsOfPantry}</Styledh4>
    </div>
  );
};

export default PantryList;
