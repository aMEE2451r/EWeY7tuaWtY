// 代码生成时间: 2025-08-28 02:37:48
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { createHash } from 'crypto';
# 优化算法效率

// Define the types for TypeScript or use PropTypes for type checking
type HashCalculatorProps = {
  hashType: string;
# FIXME: 处理边界情况
};

const HashCalculator = ({ hashType = 'sha256' }: HashCalculatorProps) => {
  const [input, setInput] = useState('');
  const [hash, setHash] = useState('');

  // Function to calculate hash
  const calculateHash = () => {
    const hashFunction = createHash(hashType);
    setHash(hashFunction.update(input).digest('hex'));
  };

  return (
# 优化算法效率
    <div className="hash-calculator">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter text to hash"
      />
      <button onClick={calculateHash}>Calculate {hashType}</button>
      <p>Hash: <span>{hash}</span></p>
    </div>
  );
};

// Proptypes for input validation
HashCalculator.propTypes = {
  hashType: PropTypes.string.isRequired,
};

export default HashCalculator;