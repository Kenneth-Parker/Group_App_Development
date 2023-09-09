
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import "./App.css";

//components

import NavBar from "./components/NavBar";
import PantryList from "./components/PantryList";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <NavBar />
        {/* <Routes>
        
          <Route path="/"/> 
          <Route/>
        </Routes> */}

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
      <PantryList/>
    </>
  );

}

export default App;
