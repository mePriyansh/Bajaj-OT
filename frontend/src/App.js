// src/App.js
import React, { useState } from 'react';
import { sendPostRequest, sendGetRequest } from './api';
import JsonInput from './components/JsonInput';
import ResponseView from './components/ResponseView';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  const [filter, setFilter] = useState([]);

  // Handle JSON form submission
  const handleJsonSubmit = async (jsonData) => {
    const result = await sendPostRequest(jsonData);
    setData(result);
  };

  // Handle filter selection
  const handleFilterChange = (event) => {
    const { options } = event.target;
    const selected = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selected.push(options[i].value);
      }
    }
    setFilter(selected);
  };

  return (
    <div className="App">
      <h1>Full-Stack Project - React Frontend</h1>
      <JsonInput onSubmit={handleJsonSubmit} />
      {data && (
        <>
          <select multiple onChange={handleFilterChange}>
            <option value="numbers">Numbers</option>
            <option value="alphabets">Alphabets</option>
            <option value="highest_lowercase_alphabet">Highest Lowercase Alphabet</option>
          </select>
          <ResponseView data={data} filter={filter} />
        </>
      )}
    </div>
  );
}

export default App;
