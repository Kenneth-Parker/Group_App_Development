import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import './App.css';

import NavBar from './components/NavBar';
import PantryList from './components/PantryList';
import PantryItemSelector from './components/PantryItemSelector';
import MealApi from './components/MealApi';
import ShoppingForm from './components/ShoppingForm';
// import IngredientDropdownList from './components/IngredientDropdownList';


function App() {
  const [selectedItems, setSelectedItems] = useState([]);
  console.log(selectedItems);

  return (
    <>
      <Router>
        <NavBar />
       
        <Routes>
          <Route path="/" element={ <div><PantryList selectedItems={selectedItems} /> <PantryItemSelector selectedItems={selectedItems} setSelectedItems={setSelectedItems} /> </div>}/>
          <Route path="/about" element={<h4>yup</h4>} />
          <Route path="/contact" element={<p>"therewasafarmerhadadogandbingowashisnameo"</p>} />
          <Route path="/shopping List" element={<ShoppingForm/>}/>
        </Routes>
      </Router>

      
    


      {/* <IngredientDropdownList /> */}
      

    </>
  );
}

export default App;
