import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";

import NavBar from "./components/NavBar";
import PantryList from "./components/PantryList";
import PantryItemSelector from "./components/PantryItemSelector";
import EdamamList from "./components/MealApi";
import ShoppingForm from "./components/ShoppingForm";
import ShowRecipePage from "./components/ShowRecipePage";
import NumberOfResults from "./NumberOfResults";

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
      
        <Routes>
     
          <Route path="/" element={numberOfResultsShown === 10 ? ( 
          <div>
                     <NumberOfResults numberOfResultsShown={numberOfResultsShown} setNumberOfResultsShown={setNumberOfResultsShown}/> <PantryItemSelector
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
