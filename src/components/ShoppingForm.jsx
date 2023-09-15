import "./ShoppingForm.css"
import ingredients from "./pantryitems.js";
import { useState } from "react";
import Draggable from 'react-draggable'

const ShoppingForm = ({shoppingList, setShoppingList}) => {
    // const [shoppingList, setShoppingList] = useState([]);
    const [item1, setItem1] = useState(" ");
    const [item2, setItem2] = useState(" ");
    const [item3, setItem3] = useState(" ");
    const [item4, setItem4] = useState(" ");

    function handleSubmit(event) {
        event.preventDefault();
        const newItems = [item1, item2, item3, item4].filter((item) => item.trim() !== "");
        const uniqueItems = newItems.filter((newItem) => !ingredients.includes(newItem));
        ingredients.push(...uniqueItems)
        console.log(ingredients)
        setShoppingList([...shoppingList, ...newItems])
        setItem1("")
        setItem2("")
        setItem3("")
        setItem4("")
    };

    function handleItem1(event) {
        setItem1(event.target.value)
    };
    function handleItem2(event) {
        setItem2(event.target.value)
    };
    function handleItem3(event) {
        setItem3(event.target.value)
    };
    function handleItem4(event) {
        setItem4(event.target.value)
    };

    function handleOnClick(itemToRemove) {
        const updatedList = shoppingList.filter((listItems) => listItems !== itemToRemove)
        ingredients.filter((ingredient) => ingredient !== itemToRemove)
        setShoppingList(updatedList)
       
    };

    const ReturnedList = () => {
        return (
            <ul>
                {shoppingList && shoppingList.length > 0 ? (
                shoppingList.map((item, i) => (
                    <li key={i} id={i} value={item} onClick={() => handleOnClick(item)}>{item}</li>))
   ) : (
    <li>No items on your list</li>
   )}
   </ul>
   );
};
    return (
        <Draggable>
        <div className="container">
                <h3 className="title">SHOPPING LIST</h3>
            <div className="ShoppingList">
                <form onSubmit={handleSubmit}>
                    <input
                        name="item1"
                        type="text"
                        value={item1}
                        onChange={handleItem1}
                        placeholder="item 1"
                        
                    />
                    <hr></hr>
                    <input
                        name="item2"
                        type="text"
                        value={item2}
                        onChange={handleItem2}
                        placeholder="item 2"
                    />
                    <hr></hr>
                    <input
                        name="item3"
                        type="text"
                        value={item3}
                        onChange={handleItem3}
                        placeholder="item 3"
                    />
                    <hr></hr>
                    <input
                        name="item4"
                        type="text"
                        value={item4}
                        onChange={handleItem4}
                        placeholder="item 4"
                    />
                    <br></br>
                    <button
                        className="Submit"
                        type="submit">
                        Submit</button>
                </form>
            </div>
            <div className="returnedList">
                {ReturnedList()}
            </div>
        </div>
        </Draggable>
    );
};

export default ShoppingForm;
