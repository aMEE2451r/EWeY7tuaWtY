// 代码生成时间: 2025-08-31 10:00:23
 * @prop input - The input string to calculate hash for.
 * @prop hashType - The type of hash to calculate (e.g., 'MD5', 'SHA256').
 */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { createHash } from 'crypto';

interface HashCalculatorProps {
  input: string;
  hashType: 'MD5' | 'SHA256' | 'SHA512';
}

const HashCalculatorComponent: React.FC<HashCalculatorProps> = ({ input, hashType }) => {
  const [output, setOutput] = useState<string>("");

  const calculateHash = (hashType: 'MD5' | 'SHA256' | 'SHA512', input: string) => {
    const hash = createHash(hashType);
    hash.update(input);
    return hash.digest('hex');
  };

  React.useEffect(() => {
    const result = calculateHash(hashType, input);
    setOutput(result);
  }, [input, hashType]);

  return (
    <div>
      <h2>Hash Calculator</h2>
      <p>Hash Output: {output}</p>
    </div>
  );
};

HashCalculatorComponent.propTypes = {
  input: PropTypes.string.isRequired,
  hashType: PropTypes.oneOf(['MD5', 'SHA256', 'SHA512']).isRequired,
};

export default HashCalculatorComponent;