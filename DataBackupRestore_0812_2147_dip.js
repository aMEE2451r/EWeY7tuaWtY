// 代码生成时间: 2025-08-12 21:47:51
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// PropTypes 或 TypeScript 类型定义
const propTypes = {
  data: PropTypes.object.isRequired,
  onDataChange: PropTypes.func.isRequired,
  initialData: PropTypes.object
};

// 函数组件
const DataBackupRestore = ({ data, onDataChange, initialData }) => {
  // 状态管理
  const [backupData, setBackupData] = useState(initialData || data);
  const [currentData, setCurrentData] = useState(data);

  // 备份数据
  const backup = () => {
    setBackupData({ ...currentData });
  };

  // 恢复数据
  const restore = () => {
    setCurrentData({ ...backupData });
    onDataChange(backupData);
  };

  return (
    <div>
      <button onClick={backup}>Backup Data</button>
      <button onClick={restore}>Restore Data</button>
      <pre>{JSON.stringify(currentData, null, 2)}</pre>
    </div>
  );
};

DataBackupRestore.propTypes = propTypes;

export default DataBackupRestore;