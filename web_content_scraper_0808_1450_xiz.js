// 代码生成时间: 2025-08-08 14:50:32
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';  // 引入 axios 用于发起 HTTP 请求

// 使用 PropTypes 进行类型检验
const propTypes = {
  url: PropTypes.string.isRequired,
};

// 函数组件实现
const WebContentScraper = ({ url }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [content, setContent] = useState('');
  const [error, setError] = useState(null);

  // 用于处理网页内容抓取的副作用
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setContent(response.data);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);  // 依赖于 url 的变化

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Web Content</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />  // 使用 dangerouslySetInnerHTML 渲染 HTML
    </div>
  );
};

// 应用 PropTypes
WebContentScraper.propTypes = propTypes;

export default WebContentScraper;
