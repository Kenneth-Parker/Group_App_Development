import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

import NavBar from './components/NavBar';
import PantryList from './components/PantryList';
import PantryItemSelector from './components/PantryItemSelector';
import MealApi from './components/MealApi';
import ShoppingForm from './components/ShoppingForm';

function App() {
  const [selectedItems, setSelectedItems] = useState([]);
  console.log(selectedItems);

  return (
    <>
      <Router>
        <NavBar />
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
        <Routes>
          <Route path="/" element={<PantryList selectedItems={selectedItems} />} />
        </Routes>
      </Router>
      <PantryItemSelector selectedItems={selectedItems} setSelectedItems={setSelectedItems} />
      <ShoppingForm/>
    </>
  );
}

export default App;
