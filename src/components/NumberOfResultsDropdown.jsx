import React from 'react';
import "./NumberOfResultsDropdown.css"

function NumberOfResultsDropdown({ numberOfResultsShown, setNumberOfResultsShown }) {
  const handleChange = (e) => {
    setNumberOfResultsShown(parseInt(e.target.value));
  };

  return (
    <div >
      <label className="numresults">
        Select number of results:
        <select value={numberOfResultsShown} onChange={handleChange}>
          {[10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

export default NumberOfResultsDropdown;
