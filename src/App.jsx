import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";

import NavBar from "./components/NavBar";
import PantryList from "./components/PantryList";
import PantryItemSelector from "./components/PantryItemSelector";
import EdamamList from "./components/MealApi";
import ShoppingForm from "./components/ShoppingForm";
import RecipesPage from "./components/RecipesPage";


function App() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [shoppingList, setShoppingList] = useState([]);
  console.log(shoppingList);

  return (
    <>
      <Router>
        <NavBar />

        <Routes>
          <Route
            path="/"
            element={
              <div>
                {" "}
                <PantryItemSelector
                  selectedItems={selectedItems}
                  setSelectedItems={setSelectedItems}
                />{" "}
                <PantryList selectedItems={selectedItems} />{" "}
                <EdamamList selectedItems={selectedItems} />{" "}
              </div>
            }
          />
          <Route path="/about" element={<h4>yup</h4>} />
          <Route
            path="/contact"
            element={<p>"therewasafarmerhadadogandbingowashisnameo"</p>}
          />
          <Route path="/recipe" element={<RecipesPage />} />

          <Route
            path="/shopping List"
            element={
              <ShoppingForm
                shoppingList={shoppingList}
                setShoppingList={setShoppingList}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
