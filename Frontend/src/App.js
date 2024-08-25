// src/App.js
import React, { useState } from "react";
import axios from "axios";
import InputForm from "./Components/Inputform";
import FilterOptions from "./Components/Filteroptions";
import FilteredResponse from "./Components/FilteredResponse";
import "./App.css";

const App = () => {
  const [responseData, setResponseData] = useState({
    numbers: [],
    alphabets: [],
    highestLowercase: [],
  });
  const [filterOptions, setFilterOptions] = useState({
    numbers: false,
    alphabets: false,
    highestLowercase: false,
  });

  const handleFormSubmit = (jsonData) => {
    // Make API call
    axios
      .post("http://localhost:5000/bfhl", jsonData)
      .then((response) => {
        const data = response.data;
        if (data && data.is_success) {
          // Map the fields correctly based on the API response structure
          setResponseData({
            numbers: data.numbers || [],
            alphabets: data.alphabets || [],
            highestLowercase: data.highest_lowercase_alphabet || [],
          });
        } else {
          console.error("Invalid response structure or data:", data);
          setResponseData({ numbers: [], alphabets: [], highestLowercase: [] });
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setResponseData({ numbers: [], alphabets: [], highestLowercase: [] });
      });
  };

  const handleFilterChange = (name, checked) => {
    setFilterOptions((prevOptions) => ({
      ...prevOptions,
      [name]: checked,
    }));
  };

  const filteredData = () => {
    let filtered = [];

    if (filterOptions.numbers) {
      filtered = [...filtered, ...responseData.numbers];
    }
    if (filterOptions.alphabets) {
      filtered = [...filtered, ...responseData.alphabets];
    }
    if (filterOptions.highestLowercase) {
      filtered = [...filtered, ...responseData.highestLowercase];
    }

    return filtered;
  };

  return (
    <div className="App">
      <div className="form-container">
        <InputForm onSubmit={handleFormSubmit} />
        {(responseData.numbers.length > 0 || responseData.alphabets.length > 0 || responseData.highestLowercase.length > 0) && (
          <>
            <FilterOptions filterOptions={filterOptions} onFilterChange={handleFilterChange} />
            <FilteredResponse filteredData={filteredData()} />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
