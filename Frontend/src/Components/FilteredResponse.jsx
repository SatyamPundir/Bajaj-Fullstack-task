import React from "react";
import './styles/FilteredResponse.css'

const FilteredResponse = ({ filteredData }) => {
  return (
    <div className="filtered-response">
      <h3>Filtered Response:</h3>
      {filteredData.length > 0 ? (
        <p>{filteredData.join(", ")}</p>
      ) : (
        <p>No data available for selected filters.</p>
      )}
    </div>
  );
};

export default FilteredResponse;