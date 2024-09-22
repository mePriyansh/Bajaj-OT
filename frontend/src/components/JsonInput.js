// src/components/JsonInput.js
import React, { useState } from 'react';

const JsonInput = ({ onSubmit }) => {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      const jsonData = JSON.parse(input);
      onSubmit(jsonData);
      setError('');
    } catch (err) {
      setError('Invalid JSON format.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={input}
        onChange={handleChange}
        placeholder='Enter JSON data here'
        rows={5}
        cols={50}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type='submit'>Submit JSON</button>
    </form>
  );
};

export default JsonInput;
