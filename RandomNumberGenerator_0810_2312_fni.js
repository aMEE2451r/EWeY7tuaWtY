// 代码生成时间: 2025-08-10 23:12:02
import React, { useState } from 'react';
import PropTypes from 'prop-types'; // 引入PropTypes用于类型检查

// 设置组件的Props类型
const propTypes = {
  range: PropTypes.shape({
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
  }),
};

// 随机数生成器组件
const RandomNumberGenerator = ({ range }) => {
  const [randomNumber, setRandomNumber] = useState(null); // 状态：保存生成的随机数

  // 生成随机数的函数
  const generateRandomNumber = () => {
    const { min, max } = range;
    setRandomNumber(Math.floor(Math.random() * (max - min + 1)) + min);
  };

  // 渲染组件
  return (
    <div>
      <h2>Random Number Generator</h2>
      <button onClick={generateRandomNumber}>Generate</button>
      {randomNumber !== null && <p>Random Number: {randomNumber}</p>}
    </div>
  );
};

// 设置默认props
RandomNumberGenerator.defaultProps = {
  range: {
    min: 1,
    max: 100,
  },
};

// 设置propTypes
RandomNumberGenerator.propTypes = propTypes;

export default RandomNumberGenerator;