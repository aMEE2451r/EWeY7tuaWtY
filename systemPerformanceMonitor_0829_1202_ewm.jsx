// 代码生成时间: 2025-08-29 12:02:13
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// TypeScript 版本
// import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// export interface SystemPerformanceMonitorProps {}

const SystemPerformanceMonitor = () => {
  // 状态管理
  const [cpuUsage, setCpuUsage] = useState<number>(0);
  const [memoryUsage, setMemoryUsage] = useState<number>(0);

  // 获取系统信息
  const getSystemInfo = () => {
    // 这里假设一个API获取系统性能数据，实际应用中需要替换为真实的API调用
    const data = { cpu: 50, memory: 70 };
    setCpuUsage(data.cpu);
    setMemoryUsage(data.memory);
  };

  // 组件挂载时获取系统信息
  useEffect(() => {
    getSystemInfo();
    // 每5秒更新一次系统信息
    const interval = setInterval(getSystemInfo, 5000);
    return () => clearInterval(interval);
  }, []);

  // PropTypes 或 TypeScript 类型验证
  SystemPerformanceMonitor.propTypes = {
    // 这里可以根据需要添加props类型检查
  };

  return (
    <div>
      <h1>System Performance Monitor</h1>
      <p>CPU Usage: {cpuUsage}%</p>
      <p>Memory Usage: {memoryUsage}%</p>
    </div>
  );
};

export default SystemPerformanceMonitor;