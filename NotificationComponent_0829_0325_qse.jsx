// 代码生成时间: 2025-08-29 03:25:42
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// 定义类型
type NotificationType = {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
};

const NotificationComponent = ({ notifications }) => {
  // State to store notifications
  const [notified, setNotified] = useState<NotificationType[]>([]);

  // 处理通知添加
  const addNotification = (notification: NotificationType) => {
    setNotified(prev => [...prev, notification]);
  };

  // 处理通知移除
  const removeNotification = (id: string) => {
    setNotified(prev => prev.filter(notification => notification.id !== id));
  };

  // 组件卸载时清除通知
  React.useEffect(() => {
    return () => {
      setNotified([]);
    };
  }, []);

  return (
    <div>
      {notified.map(notification => (
        <div key={notification.id} className={`notification ${notification.type}`}>
          {notification.message}
          <button onClick={() => removeNotification(notification.id)}>Dismiss</button>
        </div>
      ))}
    </div>
  );
};

NotificationComponent.propTypes = {
  notifications: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['success', 'error', 'info']).isRequired,
  })).isRequired,
};

export default NotificationComponent;