// 代码生成时间: 2025-08-21 11:22:08
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Define the prop types for the component
const propTypes = {
  url: PropTypes.string.isRequired,
};

// Define the component with state management using useState hook
const UrlValidatorComponent = ({ url }) => {
  const [isValid, setIsValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Function to validate URL
  const validateUrl = (url) => {
    try {
      new URL(url);
      setIsValid(true);
      setErrorMessage('');
    } catch (e) {
      setIsValid(false);
      setErrorMessage('Invalid URL format');
    }
  };

  // Effect to validate URL on mount and when url prop changes
  React.useEffect(() => {
    validateUrl(url);
  }, [url]);

  return (
    <div>
      <p>The URL is {isValid ? 'valid' : 'invalid'}.</p>
      {!isValid && <p>{errorMessage}</p>}
    </div>
  );
};

UrlValidatorComponent.propTypes = propTypes;

export default UrlValidatorComponent;
