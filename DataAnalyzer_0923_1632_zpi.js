// 代码生成时间: 2025-09-23 16:32:11
import React, { useState } from 'react';
import PropTypes from 'prop-types'; // 用于PropTypes类型检查

// 定义组件的类型
const DataAnalyzer = ({ data }) => {
  // 使用useState创建state管理
  const [stats, setStats] = useState({
    count: data.length,
    sum: data.reduce((a, b) => a + b, 0),
    average: data.reduce((a, b) => a + b, 0) / data.length,
  });

  // 处理数据更新
  const updateData = (newData) => {
    setStats({
      count: newData.length,
      sum: newData.reduce((a, b) => a + b, 0),
      average: newData.reduce((a, b) => a + b, 0) / newData.length,
    });
  };

  // 渲染组件
  return (
    <div>
      <h1>Data Analysis</h1>
      <p>Data Count: {stats.count}</p>
      <p>Data Sum: {stats.sum}</p>
      <p>Data Average: {stats.average.toFixed(2)}</p>
      <button onClick={() => updateData([...data, Math.floor(Math.random() * 100)])}>Add Random Data</button>
    </div>
  );
};

// 组件属性类型检查
DataAnalyzer.propTypes = {
  data: PropTypes.arrayOf(PropTypes.number).isRequired,
};

// 默认属性值
DataAnalyzer.defaultProps = {
  data: [],
};

export default DataAnalyzer;
