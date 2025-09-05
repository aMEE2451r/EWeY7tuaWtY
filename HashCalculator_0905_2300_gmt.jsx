// 代码生成时间: 2025-09-05 23:00:15
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Define the type for the hash function
type HashFunctionType = 'md5' | 'sha256' | 'sha512';

// HashCalculator component
const HashCalculator = ({ hashFunction }) => {
  // State to store the input value and hash
  const [input, setInput] = useState('');
  const [hash, setHash] = useState('');

  // Function to calculate hash
  const calculateHash = async () => {
    const response = await fetch('https://your-hashing-service.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
# TODO: 优化性能
      },
      body: JSON.stringify({ value: input, hashFunction }),
    });

    const data = await response.json();
    setHash(data.hash);
  };

  return (
    <div>
      <h2>Hash Calculator</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a value to hash"
      />
      <button onClick={calculateHash}>Calculate Hash</button>
# 改进用户体验
      {hash && <p>Hash: {hash}</p>}
    </div>
  );
};

// PropTypes for the component
HashCalculator.propTypes = {
  hashFunction: PropTypes.oneOf(['md5', 'sha256', 'sha512']).isRequired,
};
# NOTE: 重要实现细节

// Default props in case they are not provided
HashCalculator.defaultProps = {
  hashFunction: 'md5',
};

export default HashCalculator;