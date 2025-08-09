// 代码生成时间: 2025-08-09 11:11:25
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { createHash } from 'crypto'; // Node.js core module for hashing

// Define the component
const HashCalculator = () => {
    const [input, setInput] = useState(''); // State to store the input string
    const [hash, setHash] = useState(''); // State to store the calculated hash

    // Function to calculate hash
    const calculateHash = () => {
        const hasher = createHash('sha256');
        hasher.update(input);
        setHash(hasher.digest('hex'));
    };

    return (
        <div>
            <h2>Hash Calculator</h2>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter text..."
            />
            <button onClick={calculateHash}>Calculate SHA-256</button>
            <p>Hash: {hash}</p>
        </div>
    );
};

// PropTypes validation
HashCalculator.propTypes = {
    // No props are expected for this component, so we can omit this if not needed
};

// Export the component
export default HashCalculator;
