import "./ShoppingForm.css"
import ingredients from "./pantryitems.js";
import { useState } from "react";

const ShoppingForm = ( {shoppingList, setShoppingList}) => {
    const [item1, setItem1] = useState(" ");
    const [item2, setItem2] = useState(" ");
    const [item3, setItem3] = useState(" ");
    const [item4, setItem4] = useState(" ");

    function handleSubmit(event) {
        event.preventDefault();
        const newItems = [item1, item2, item3, item4].filter((item) => item.trim() !== "");
        const uniqueItems = newItems.filter((newItem) => !ingredients.includes(newItem))
        ingredients.push(...uniqueItems)

        setShoppingList([...shoppingList, ...newItems])
        setItem1("")
        setItem2("")
        setItem3("")
        setItem4("")
    }

    console.log(ingredients)

    function handleItem1() {
        setItem1(event.target.value)

    };
    function handleItem2() {
        setItem2(event.target.value)
    };
    function handleItem3() {
        setItem3(event.target.value)
    };

    function handleItem4() {
    setItem4(event.target.value)
    };

    function handleOnClick(itemToRemove){
       const updatedList = shoppingList.filter((listItems) => listItems !== itemToRemove)
        setShoppingList(updatedList)
    }

    const ReturnedList = () => {
        return (
            <ul>
               {shoppingList.map((item, i) => (
            <li id={i} value={item} onClick={() => handleOnClick(item)}>{item}</li> ))}
           </ul>
        )
      }
    
    

return (
    <div className="container">
    <div className="ShoppingList"> 
        <form onSubmit={handleSubmit}>
      <h3 className="title">SHOPPING LIST</h3>
            <input
                name="item1"
                type="text"
                value={item1}
                onChange={handleItem1}
                placeholder="item 1"
            />
            <input
                name="item2"
                type="text"
                value={item2}
                onChange={handleItem2}
                placeholder="item 2"
            />
            <input
                name="item3"
                type="text"
                value={item3}
                onChange={handleItem3}
                placeholder="item 3"
            />
            <input
                name="item4"
                type="text"
                value={item4}
                onChange={handleItem4}
                placeholder="item 4"
            />
            <br></br>
            <button
                type="submit">
                Submit</button>
        </form>
    </div>
     <div>
       {ReturnedList()}
     </div>

    </div>

);
};

export default ShoppingForm;
