import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import AboutPage from './components/About';
import ContactPage from './components/Contacts';

import NavBar from "./components/NavBar";
import ResultSection from "./components/ResultSection";
import ShowRecipePage from "./components/ShowRecipePage";
import ShoppingForm from "./components/ShoppingForm";
import ResultsDropdown from './components/ResultsDropdown';

import NavBar from "./components/NavBar";
import PantryList from "./components/PantryList";
import PantryItemSelector from "./components/PantryItemSelector";
import EdamamList from "./components/MealApi";
import ShoppingForm from "./components/ShoppingForm";
import ShowRecipePage from "./components/ShowRecipePage";

function App() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [numberOfResultsShown, setNumberOfResultsShown] = useState(10);
  console.log("numberOfResultsShown in App:", numberOfResultsShown);
  console.log(selectedItems);

  return (
    <>
      <Router>
        <NavBar />

        <Routes>
          <Route path="/" element={
            <>
              <ResultsDropdown
                numberOfResultsShown={numberOfResultsShown}
                setNumberOfResultsShown={setNumberOfResultsShown}
              />
              <ResultSection
                numberOfResultsShown={numberOfResultsShown}
                selectedItems={selectedItems}
                setSelectedItems={setSelectedItems}
              />
            </>
          }
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage/>} />
          <Route path="/recipe/:recipe_id" element={<ShowRecipePage />} />
          <Route
            path="/shoppingList"
            element={
              <ShoppingForm />
            }
          />

        </Routes>
      </Router>
    </>
  );
}

export default App;
