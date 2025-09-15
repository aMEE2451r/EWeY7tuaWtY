// 代码生成时间: 2025-09-15 15:43:47
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// 定义组件的PropTypes
const propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDataChange: PropTypes.func.isRequired,
};

// DataCleaningTool组件
const DataCleaningTool = ({ data, onDataChange }) => {
  // 使用useState Hooks来管理state
  const [cleanedData, setCleanedData] = useState(data);

  // 数据清洗的方法，这里以去除空字符串为例
  const cleanData = () => {
    const newData = data.map(item => ({
      ...item,
      ...Object.keys(item).reduce((acc, key) => {
        if (typeof item[key] === 'string' && item[key].trim() === '') {
          acc[key] = ''; // 去除空字符串
        } else {
          acc[key] = item[key];
        }
        return acc;
      }, {}),
    }));
    setCleanedData(newData);
    onDataChange(newData);
  };

  // 渲染组件
  return (
    <div>
      <h1>Data Cleaning and Preprocessing Tool</h1>
      <button onClick={cleanData}>Clean Data</button>
      <div>Data: {JSON.stringify(cleanedData)}</div>
    </div>
  );
};

// 设置默认的PropTypes
DataCleaningTool.propTypes = propTypes;

export default DataCleaningTool;
