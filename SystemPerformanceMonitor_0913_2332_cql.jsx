// 代码生成时间: 2025-09-13 23:32:49
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Define PropTypes for component
const propTypes = {
  interval: PropTypes.number,
};

// Define default props
const defaultProps = {
  interval: 1000,
};

// SystemPerformanceMonitor component
const SystemPerformanceMonitor = ({ interval }) => {
  const [performanceData, setPerformanceData] = useState({
    cpuUsage: 0,
    memoryUsage: 0,
  });

  useEffect(() => {
    // Function to fetch system performance data
    const fetchPerformanceData = async () => {
      // Simulated system performance data fetching
      const cpuUsage = Math.random() * 100;
      const memoryUsage = Math.random() * 100;
      setPerformanceData({ cpuUsage, memoryUsage });
    };

    // Set up the interval to fetch system performance data
    const intervalId = setInterval(fetchPerformanceData, interval);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [interval]);

  return (
    <div>
      <h2>System Performance Monitor</h2>
      <p>CPU Usage: {performanceData.cpuUsage.toFixed(2)}%</p>
      <p>Memory Usage: {performanceData.memoryUsage.toFixed(2)}%</p>
    </div>
  );
};

SystemPerformanceMonitor.propTypes = propTypes;
SystemPerformanceMonitor.defaultProps = defaultProps;

export default SystemPerformanceMonitor;