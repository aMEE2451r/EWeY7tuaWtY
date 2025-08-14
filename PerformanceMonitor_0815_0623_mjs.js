// 代码生成时间: 2025-08-15 06:23:13
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// 使用TypeScript的情况下，可以替换PropTypes为相应的类型定义
// interface PerformanceData {
//  cpuUsage: number;
//  memoryUsage: number;
//  diskUsage: number;
// }

const PerformanceMonitor = ({initialData}) => {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    // 模拟性能数据更新
    const intervalId = setInterval(() => {
      // 此处应调用API或其他方式获取系统性能数据
      // 例如：setData({cpuUsage: Math.random() * 100, memoryUsage: Math.random() * 100, diskUsage: Math.random() * 100});
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h1>System Performance Monitor</h1>
      <p>CPU Usage: {data.cpuUsage}%</p>
      <p>Memory Usage: {data.memoryUsage}%</p>
      <p>Disk Usage: {data.diskUsage}%</p>
    </div>
  );
};

// 使用PropTypes进行参数验证
PerformanceMonitor.propTypes = {
  initialData: PropTypes.shape({
    cpuUsage: PropTypes.number,
    memoryUsage: PropTypes.number,
    diskUsage: PropTypes.number,
  }),
};

// 使用TypeScript的情况下，可以定义默认props类型
// PerformanceMonitor.defaultProps = {};

export default PerformanceMonitor;
