import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";

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
        {/* dropdown for max results */}
        <label>Select number of results:</label>
       <select value={numberOfResultsShown} onChange={(e) => setNumberOfResultsShown(parseInt(e.target.value))} >
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={30}>30</option>
        <option value={40}>40</option>
        <option value={50}>50</option>
        <option value={60}>60</option>
        <option value={70}>70</option>
        <option value={80}>80</option>
        <option value={90}>90</option>
        <option value={100}>100</option>
        </select>
        <Routes>
          <Route path="/" element={numberOfResultsShown === 10 ? ( 
          <div>
                      <PantryItemSelector
           selectedItems={selectedItems} 
           setSelectedItems={setSelectedItems} 
           /> 
            <PantryList 
          selectedItems={selectedItems} 
          numberOfResultsShown={numberOfResultsShown} 
          /> 
           </div> 
           ) : numberOfResultsShown === 20 ? (
            <>
            <PantryItemSelector
            selectedItems={selectedItems} 
            setSelectedItems={setSelectedItems} 
            /> 
           <EdamamList 
           selectedItems={selectedItems} 
           numberOfResultsShown={20} 
           /> 
           </>
           ) : numberOfResultsShown === 30 ? ( 
           <> 
            <PantryItemSelector
            selectedItems={selectedItems} 
            setSelectedItems={setSelectedItems} 
            /> 
           <PantryList 
           selectedItems={selectedItems} 
           numberOfResultsShown={10} 
           /> 
           <EdamamList 
           selectedItems={selectedItems} 
           numberOfResultsShown={20} 
           />
           </>
           ) : numberOfResultsShown === 40 ? ( 
            <> 
                        <PantryItemSelector
            selectedItems={selectedItems} 
            setSelectedItems={setSelectedItems} 
            /> 
            <PantryList 
            selectedItems={selectedItems} 
            numberOfResultsShown={20} 
            /> 
            <EdamamList 
            selectedItems={selectedItems} 
            numberOfResultsShown={20} 
            />
            </>
            ) : numberOfResultsShown === 50 ? ( 
              <> 
                          <PantryItemSelector
            selectedItems={selectedItems} 
            setSelectedItems={setSelectedItems} 
            /> 
              <PantryList 
              selectedItems={selectedItems} 
              numberOfResultsShown={30} 
              /> 
              <EdamamList 
              selectedItems={selectedItems} 
              numberOfResultsShown={20} 
              />
              </>
              ) :  numberOfResultsShown === 60 ? ( 
                <> 
                            <PantryItemSelector
            selectedItems={selectedItems} 
            setSelectedItems={setSelectedItems} 
            /> 
                <PantryList 
                selectedItems={selectedItems} 
                numberOfResultsShown={40} 
                /> 
                <EdamamList 
                selectedItems={selectedItems} 
                numberOfResultsShown={20} 
                />
                </>
                ) : numberOfResultsShown === 70 ? ( 
                  <> 
                              <PantryItemSelector
            selectedItems={selectedItems} 
            setSelectedItems={setSelectedItems} 
            /> 
                  <PantryList 
                  selectedItems={selectedItems} 
                  numberOfResultsShown={50} 
                  /> 
                  <EdamamList 
                  selectedItems={selectedItems} 
                  numberOfResultsShown={20} 
                  />
                  </>
                  ) : numberOfResultsShown === 80 ? ( 
                    <> 
                                <PantryItemSelector
            selectedItems={selectedItems} 
            setSelectedItems={setSelectedItems} 
            /> 
                    <PantryList 
                    selectedItems={selectedItems} 
                    numberOfResultsShown={60} 
                    /> 
                    <EdamamList 
                    selectedItems={selectedItems} 
                    numberOfResultsShown={20} 
                    />
                    </>
                    ) : numberOfResultsShown === 90 ? ( 
                      <> 
                                  <PantryItemSelector
            selectedItems={selectedItems} 
            setSelectedItems={setSelectedItems} 
            /> 
                      <PantryList 
                      selectedItems={selectedItems} 
                      numberOfResultsShown={70} 
                      /> 
                      <EdamamList 
                      selectedItems={selectedItems} 
                      numberOfResultsShown={20} 
                      />
                      </>
                      ) : numberOfResultsShown === 100 ? ( 
                        <> 
                                    <PantryItemSelector
            selectedItems={selectedItems} 
            setSelectedItems={setSelectedItems} 
            /> 
                        <PantryList 
                        selectedItems={selectedItems} 
                        numberOfResultsShown={80} 
                        /> 
                        <EdamamList 
                        selectedItems={selectedItems} 
                        numberOfResultsShown={20} 
                        />
                        </>
                        ) : null 
           }
           />

          <Route path="/recipe/:recipe_id" element={<ShowRecipePage />} />

          <Route
            path="/shoppingList"
            element={
              <ShoppingForm
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
