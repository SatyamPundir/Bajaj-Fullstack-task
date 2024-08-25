// src/Components/Inputform.jsx
import React, { useState } from "react";
import './styles/InputForm.css'

const InputForm = ({ onSubmit }) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => setInput(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const jsonData = JSON.parse(input);  // Parse JSON to ensure valid input
      onSubmit(jsonData);
    } catch (error) {
      alert("Invalid JSON input");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={input} onChange={handleChange} placeholder="Enter JSON input" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default InputForm;
