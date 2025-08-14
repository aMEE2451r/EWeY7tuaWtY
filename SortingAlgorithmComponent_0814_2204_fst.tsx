// 代码生成时间: 2025-08-14 22:04:50
// SortingAlgorithmComponent.tsx
import React, { useState } from 'react';
import PropTypes from 'prop-types'; // 如果使用TypeScript，则不需要导入PropTypes

// 定义组件类型
const propTypes = {
  items: PropTypes.arrayOf(PropTypes.number).isRequired,
  compareFunction: PropTypes.func,
};

// 定义组件默认属性
const defaultProps = {
  compareFunction: (a, b) => a - b,
};

// 函数组件
const SortingAlgorithmComponent = ({ items, compareFunction }) => {
  const [sortedItems, setSortedItems] = useState(items);

  // 冒泡排序算法实现
  const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (compareFunction(arr[j], arr[j + 1]) > 0) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    return arr;
  };

  // 点击事件处理函数，执行排序
  const handleSort = () => {
    const sorted = bubbleSort([...sortedItems]);
    setSortedItems(sorted);
  };

  // 渲染组件
  return (
    <div>
      <button onClick={handleSort}>Sort</button>
      <ul>
        {sortedItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

// 设置propTypes和defaultProps
SortingAlgorithmComponent.propTypes = propTypes;
SortingAlgorithmComponent.defaultProps = defaultProps;

export default SortingAlgorithmComponent;