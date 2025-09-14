// 代码生成时间: 2025-09-15 07:14:22
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Define TypeScript type for JSON data
interface JsonData {
  [key: string]: any;
}

const JsonFormatterComponent: React.FC<{
  json: JsonData;
}> = ({ json }) => {
  // State management for formatted JSON string
  const [formattedJson, setFormattedJson] = useState<string>(JSON.stringify(json, null, 2));

  // Function to handle JSON formatting
  const handleFormat = () => {
    try {
      const parsedJson = JSON.parse(formattedJson);
      setFormattedJson(JSON.stringify(parsedJson, null, 2));
    } catch (error) {
      console.error('Invalid JSON:', error);
    }
  };

  return (
    <div>
      <textarea
        rows={10}
        cols={50}
        value={formattedJson}
        onChange={(e) => setFormattedJson(e.target.value)}
      />
      <button onClick={handleFormat}>Format JSON</button>
    </div>
  );
};

// PropTypes for type checking
JsonFormatterComponent.propTypes = {
  json: PropTypes.shape({}),
};

export default JsonFormatterComponent;