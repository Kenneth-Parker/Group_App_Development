import {
  useLocation,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { useState } from "react";
import "./App.css";

import NavBar from "./components/NavBar";
import PantryItemSelector from "./components/PantryItemSelector";
import PantryList from "./components/PantryList";
import EdamamList from "./components/MealApi";
import ShoppingForm from "./components/ShoppingForm";


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
          <Route path="/shopping List" element={<ShoppingForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
