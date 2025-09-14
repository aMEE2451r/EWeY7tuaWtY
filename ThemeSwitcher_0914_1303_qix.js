// 代码生成时间: 2025-09-14 13:03:40
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Define the TypeScript type for the theme
// type ThemeType = 'light' | 'dark';

const ThemeSwitcher = ({ theme }) => {
  const [currentTheme, setCurrentTheme] = useState(theme);

  const toggleTheme = () => {
    setCurrentTheme(
      currentTheme === 'light' ? 'dark' : 'light'
    );
  };

  return (
    <div>
      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
      <div>
        Current Theme: {currentTheme}
      </div>
    </div>
  );
};

// Using PropTypes for runtime type checking
ThemeSwitcher.propTypes = {
  theme: PropTypes.oneOf(['light', 'dark']).isRequired,
};

// TypeScript type definition
// ThemeSwitcher.propTypes = {
//   theme: PropTypes<{
//     theme: ThemeType;
//   }>,
// };

export default ThemeSwitcher;