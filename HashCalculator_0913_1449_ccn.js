// 代码生成时间: 2025-09-13 14:49:18
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Define the type for the props if using TypeScript, otherwise use PropTypes.
const propTypes = {
  algorithm: PropTypes.oneOf(['md5', 'sha1', 'sha256', 'sha512']).isRequired,
};

// Utility function to calculate hash.
const calculateHash = (algorithm, text) => {
  return CryptoJS[algorithm](text).toString();
};

const HashCalculator = ({ algorithm }) => {
  // State to store the input text and the calculated hash.
  const [input, setInput] = useState('');
  const [hash, setHash] = useState('');

  // Handler to update the input state.
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  // Handler to calculate and set the hash when input changes.
  const handleHashCalculation = () => {
    setHash(calculateHash(algorithm, input));
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Enter text to calculate hash"
      />
      <button onClick={handleHashCalculation}>Calculate {algorithm}</button>
      <div>Hash: {hash}</div>
    </div>
  );
};

// PropTypes if not using TypeScript.
HashCalculator.propTypes = propTypes;

export default HashCalculator;
