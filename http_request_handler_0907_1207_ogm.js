// 代码生成时间: 2025-09-07 12:07:24
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// 定义组件的Prop类型
const propTypes = {
  url: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  requestBody: PropTypes.object,
  onSuccess: PropTypes.func,
  onError: PropTypes.func,
};

// 函数组件
const HttpRequestHandler = ({ url, method, requestBody, onSuccess, onError }) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  // 发送HTTP请求的函数
  const sendRequest = async () => {
    try {
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: method === 'GET' ? null : JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      if (onSuccess) {
        onSuccess(data);
      }
      setResponse(data);
    } catch (error) {
      if (onError) {
        onError(error);
      }
      setError(error);
    }
  };

  return (
    <div>
      {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
      {error && <pre>Error: {error.message}</pre>}
      <button onClick={sendRequest}>Send {method} Request</button>
    </div>
  );
};

// 设置默认prop类型
HttpRequestHandler.propTypes = propTypes;

export default HttpRequestHandler;