// 代码生成时间: 2025-09-20 18:57:49
import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

// Define PropTypes for the component
const propTypes = {
  url: PropTypes.string.isRequired,
  method: PropTypes.oneOf(['GET', 'POST', 'PUT', 'DELETE']).isRequired,
  data: PropTypes.object,
  onSuccess: PropTypes.func,
  onError: PropTypes.func,
};

// Define the component using function component and Hooks
const HttpRequestHandler = ({ url, method, data, onSuccess, onError }) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  // Function to handle the HTTP request
  const handleRequest = async () => {
    try {
      const result = await axios[method](url, data);
      if (onSuccess) {
        onSuccess(result.data);
      }
      setResponse(result.data);
    } catch (err) {
      if (onError) {
        onError(err.response?.data || err.message);
      }
      setError(err.message);
    }
  };

  return (
    <div>
      <h1>HTTP Request Handler</h1>
      {response && <p>Response: {JSON.stringify(response)}</p>}
      {error && <p>Error: {error}</p>}
      <button onClick={handleRequest}>Send Request</button>
    </div>
  );
};

// Set default props
HttpRequestHandler.defaultProps = {
  data: null,
  onSuccess: () => {},
  onError: () => {},
};

// Set propTypes
HttpRequestHandler.propTypes = propTypes;

export default HttpRequestHandler;