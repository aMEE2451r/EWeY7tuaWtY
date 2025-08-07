// 代码生成时间: 2025-08-07 13:49:10
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// PropTypes类型定义
const propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

// TypeScript类型定义
type ResponsiveLayoutComponentProps = {
  children: React.ReactNode;
  title: string;
};

const ResponsiveLayoutComponent: React.FC<ResponsiveLayoutComponentProps> = ({ children, title }) => {
  // 使用useState Hook进行状态管理
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  // 监听窗口尺寸变化
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 根据屏幕宽度决定布局
  const isMobile = windowWidth < 768;
  const layoutClass = isMobile ? 'mobile-layout' : 'desktop-layout';

  return (
    <div className={`responsive-layout ${layoutClass}`}>
      <header>
        <h1>{title}</h1>
      </header>
      <main>{children}</main>
    </div>
  );
};

ResponsiveLayoutComponent.propTypes = propTypes;

export default ResponsiveLayoutComponent;