// 代码生成时间: 2025-09-10 08:03:47
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// 使用TypeScript时，可以使用以下类型替代PropTypes
// import { FC, PropsWithChildren } from 'react';
// import { FetchResponse, FetchError } from './types';

// 定义PropTypes或TypeScript类型
const propTypes = {
  url: PropTypes.string.isRequired,
  method: PropTypes.string,
  headers: PropTypes.object,
  data: PropTypes.any,
  onSuccess: PropTypes.func,
  onError: PropTypes.func,
};

// 函数组件
const HttpRequestHandler = ({
  url,
  method = 'GET',
  headers = {},
  data,
  onSuccess,
  onError,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(url, {
        method,
        headers,
        body: data ? JSON.stringify(data) : null,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setResponse(data);
      if (onSuccess) {
        onSuccess(data);
      }
    } catch (err) {
      setError(err.message);
      if (onError) {
        onError(err);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {isLoading ? <p>Loading...</p> : null}
      {error ? <p>Error: {error}</p> : null}
      {response ? <pre>{JSON.stringify(response, null, 2)}</pre> : null}
      <button onClick={fetchData}>Fetch Data</button>
    </div>
  );
};

// 使用TypeScript时，以下是组件的类型定义
// type FetchDataProps = PropsWithChildren<{
//   url: string;
//   method?: string;
//   headers?: HeadersInit;
//   data?: any;
//   onSuccess?: (data: FetchResponse) => void;
//   onError?: (error: FetchError) => void;
// }>;

HttpRequestHandler.propTypes = propTypes;

export default HttpRequestHandler;