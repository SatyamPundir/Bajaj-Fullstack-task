// src/Components/Filteroptions.jsx
import React from "react";
import './styles/FilterOptions.css'

const FilterOptions = ({ filterOptions, onFilterChange }) => {
  const handleChange = (e) => {
    const { name, checked } = e.target;
    onFilterChange(name, checked);
  };

  return (
    <div className="filter-options">
      <label>
        <input
          type="checkbox"
          name="numbers"
          checked={filterOptions.numbers}
          onChange={handleChange}
        />
        Numbers
      </label>
      <label>
        <input
          type="checkbox"
          name="alphabets"
          checked={filterOptions.alphabets}
          onChange={handleChange}
        />
        Alphabets
      </label>
      <label>
        <input
          type="checkbox"
          name="highestLowercase"
          checked={filterOptions.highestLowercase}
          onChange={handleChange}
        />
        Highest Lowercase Alphabet
      </label>
    </div>
  );
};

export default FilterOptions;
