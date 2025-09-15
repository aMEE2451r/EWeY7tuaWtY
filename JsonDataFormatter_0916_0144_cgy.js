// 代码生成时间: 2025-09-16 01:44:06
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Define the prop types for the component
const propTypes = {
  json: PropTypes.string.isRequired
};

// Define the component
function JsonDataFormatter({ json }) {
  const [formattedJson, setFormattedJson] = useState(json);

  // Function to format the JSON data
  const formatJsonData = (event) => {
    try {
      const parsedJson = JSON.parse(event.target.value);
      setFormattedJson(JSON.stringify(parsedJson, null, 2));
    } catch (error) {
      console.error('Invalid JSON data:', error);
    }
  };

  return (
    <div>
      <h2>JSON Data Formatter</h2>
      <textarea
        rows="20"
        cols="50"
        value={json}
        onChange={formatJsonData}
      />
      <h3>Formatted JSON:</h3>
      <pre>{formattedJson}</pre>
    </div>
  );
}

JsonDataFormatter.propTypes = propTypes;

export default JsonDataFormatter;