// 代码生成时间: 2025-08-24 09:24:24
// themeSwitcherComponent.tsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// 定义主题枚举
const Theme = {
  LIGHT: 'light',
  DARK: 'dark',
};

// 主题切换组件
const ThemeSwitcherComponent = ({ theme: initialTheme }) => {
  // 使用useState来管理当前主题
  const [theme, setTheme] = useState(initialTheme);

  // 切换主题的函数
  const toggleTheme = () => {
    setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  };

  return (
    <div className={theme}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p>The current theme is: {theme}</p>
    </div>
  );
};

// 组件的PropTypes
ThemeSwitcherComponent.propTypes = {
  theme: PropTypes.oneOf([Theme.LIGHT, Theme.DARK]).isRequired,
};

// 如果使用TypeScript，可以用下面的类型替换PropTypes
// ThemeSwitcherComponent.propTypes = {
//   theme: PropTypes.oneOf([Theme.LIGHT, Theme.DARK]).isRequired,
// } as const;

export default ThemeSwitcherComponent;