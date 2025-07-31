// 代码生成时间: 2025-07-31 19:48:54
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// 使用TypeScript时，使用以下import语句代替PropTypes
// import { FunctionComponent, useState } from 'react';

// 定义组件
const RandomNumberGenerator = () => {
    // 使用useState钩子管理随机数
    const [number, setNumber] = useState(0);

    // 生成随机数的函数
    const generateRandomNumber = () => {
        setNumber(Math.floor(Math.random() * 100) + 1); // 生成1到100的随机数
    };

    return (
        <div>
            <h1>Random Number Generator</h1>
            <p>The random number is: {number}</p>
            <button onClick={generateRandomNumber}>Generate Random Number</button>
        </div>
    );
};

// 使用PropTypes时，定义组件属性类型
RandomNumberGenerator.propTypes = {};

// 使用TypeScript时，定义组件类型
// RandomNumberGenerator.propTypes = {};

// 导出组件
export default RandomNumberGenerator;
