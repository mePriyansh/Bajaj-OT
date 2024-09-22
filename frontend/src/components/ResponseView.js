// src/components/ResponseView.js
import React from 'react';

const ResponseView = ({ data, filter }) => {
  const filteredData = Object.entries(data)
    .filter(([key]) => filter.includes(key))
    .reduce((obj, [key, value]) => {
      obj[key] = value;
      return obj;
    }, {});

  return (
    <div>
      <h2>Filtered Response</h2>
      <pre>{JSON.stringify(filteredData, null, 2)}</pre>
    </div>
  );
};

export default ResponseView;
