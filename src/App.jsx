import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import "./App.css";

//components

import NavBar from "./components/NavBar";
import PantryList from "./components/PantryList";


function App() {
  const [count, setCount] = useState(0);
  const [selectedItem, setSelectedItem] = useState([])
  console.log(selectedItem)

  return (
    <>
      <Router>
        <NavBar />
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
        <Routes>
          <Route path="/" />
          {/* <Route path="/about" /> */}
        </Routes>

        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </Router>
      <PantryList selectedItem={selectedItem}setSelectedItem={setSelectedItem}/>
    </>
  );
}

export default App;
