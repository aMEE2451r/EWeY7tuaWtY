// 代码生成时间: 2025-08-22 23:13:56
 * @typescript-eslint/explicit-module-boundary-types
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import fetch from 'node-fetch'; // Assuming this is available in the environment

const WebContentScraper = ({ url }) => {
  // State to hold the fetched content and loading status
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Effect to fetch content when the component mounts and url changes
  React.useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        // Perform the HTTP GET request
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        // Parse the text from the response
        const text = await response.text();
        setContent(text);
      } catch (e) {
        setError(e.message);
        setContent('');
      } finally {
        setLoading(false);
      }
    };
    if (url) {
      fetchData();
    }
  }, [url]); // Dependency array includes url

  // Render the component based on its state
  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {content && <pre>{content}</pre>}
    </div>
  );
};

// PropTypes or TypeScript types
WebContentScraper.propTypes = {
  url: PropTypes.string.isRequired,
};

export default WebContentScraper;