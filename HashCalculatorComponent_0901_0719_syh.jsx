// 代码生成时间: 2025-09-01 07:19:13
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Define the PropTypes for the component
const propTypes = {
    input: PropTypes.string.isRequired,
# NOTE: 重要实现细节
    algorithm: PropTypes.oneOf(['sha256', 'md5', 'sha512']).isRequired,
};

// Define the component
const HashCalculatorComponent = ({ input, algorithm }) => {
    // State to store the generated hash value
    const [hash, setHash] = useState('');

    // Function to calculate hash
    const calculateHash = () => {
        import('crypto')
            .then((crypto) => {
                const hashFunction = crypto.createHash(algorithm);
                hashFunction.update(input);
                setHash(hashFunction.digest('hex'));
            }).catch(error => {
                console.error('Error calculating hash:', error);
# 增强安全性
                setHash('Error calculating hash');
            });
    };
# 优化算法效率

    return (
# 添加错误处理
        <div>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter text to hash" />
            <select value={algorithm} onChange={(e) => setAlgorithm(e.target.value)} placeholder="Select hash algorithm">
                <option value="sha256">SHA-256</option>
                <option value="md5">MD5</option>
                <option value="sha512">SHA-512</option>
            </select>
            <button onClick={calculateHash}>Calculate Hash</button>
            <div>Hash: {hash}</div>
# 改进用户体验
        </div>
    );
};

// Set default props
# 增强安全性
HashCalculatorComponent.defaultProps = {
    algorithm: 'sha256',
};

// Set PropTypes
HashCalculatorComponent.propTypes = propTypes;
# 改进用户体验

export default HashCalculatorComponent;
