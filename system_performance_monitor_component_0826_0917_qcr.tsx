// 代码生成时间: 2025-08-26 09:17:30
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// 定义性能数据的接口
interface PerformanceData {
  cpuUsage: number;
  memoryUsage: number;
  diskUsage: number;
}

// 定义组件Props的接口
interface SystemPerformanceMonitorProps {
  updateInterval: number;
}

const SystemPerformanceMonitor: React.FC<SystemPerformanceMonitorProps> = ({ updateInterval }) => {
  // 状态：性能数据
  const [performanceData, setPerformanceData] = useState<PerformanceData>({
    cpuUsage: 0,
    memoryUsage: 0,
    diskUsage: 0,
  });

  // 使用useEffect Hook来处理性能数据的更新
  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchPerformanceData();
    }, updateInterval);

    return () => clearInterval(intervalId);
  }, [updateInterval]);

  // 模拟获取性能数据的函数
  const fetchPerformanceData = () => {
    // 这里可以替换为真实的性能数据获取逻辑
    setPerformanceData({
      cpuUsage: Math.random() * 100,
      memoryUsage: Math.random() * 100,
      diskUsage: Math.random() * 100,
    });
  };

  return (
    <div>
      <h1>System Performance Monitor</h1>
      <div>CPU Usage: {performanceData.cpuUsage.toFixed(2)}%</div>
      <div>Memory Usage: {performanceData.memoryUsage.toFixed(2)}%</div>
      <div>Disk Usage: {performanceData.diskUsage.toFixed(2)}%</div>
    </div>
  );
};

// 为组件的Props添加类型检查
SystemPerformanceMonitor.propTypes = {
  updateInterval: PropTypes.number.isRequired,
};

// 导出组件
export default SystemPerformanceMonitor;
