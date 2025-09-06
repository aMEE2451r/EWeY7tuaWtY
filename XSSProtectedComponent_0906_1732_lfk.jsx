// 代码生成时间: 2025-09-06 17:32:36
 * XSSProtectedComponent.jsx
 * React component that provides basic XSS protection by escaping HTML entities.
 */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Function to escape HTML entities to prevent XSS attacks
function escapeHTML(str) {
  return str.replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/'/g, '&#39;')
    .replace(/"/g, '&quot;');
}

// Define the propTypes for the component
const propTypes = {
  userContent: PropTypes.string
};

// Define the component
const XSSProtectedComponent = ({ userContent }) => {
  // State to store the escaped content
  const [escapedContent, setEscapedContent] = useState('');

  // UseEffect to escape the content when it's updated
  React.useEffect(() => {
    setEscapedContent(escapeHTML(userContent));
  }, [userContent]);

  // Render the component
  return (
    <div dangerouslySetInnerHTML={{ __html: escapedContent }} />
  );
};

// Set default props
XSSProtectedComponent.defaultProps = {
  userContent: ''
};

// Assign propTypes to the component
XSSProtectedComponent.propTypes = propTypes;

export default XSSProtectedComponent;
