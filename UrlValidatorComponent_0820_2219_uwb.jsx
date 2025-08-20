// 代码生成时间: 2025-08-20 22:19:39
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// 导入URL正则表达式
import urlRegex from 'url-regex';

// 创建URL链接有效性验证组件
function UrlValidatorComponent({ initialUrl = "" }) {
  const [url, setUrl] = useState(initialUrl);
  const [isValid, setIsValid] = useState(false);

  const handleInputChange = (event) => {
    setUrl(event.target.value);
  };

  const validateUrl = (url) => {
    return urlRegex({ exact: false }).test(url);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsValid(validateUrl(url));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter URL to validate:
          <input
            type="text"
            value={url}
            onChange={handleInputChange}
          />
        </label>
        <input type="submit" value="Validate" />
      </form>
      {isValid ? <p>Valid URL</p> : <p>Invalid URL</p>}
    </div>
  );
}

// 定义组件的Prop类型
UrlValidatorComponent.propTypes = {
  initialUrl: PropTypes.string,
};

export default UrlValidatorComponent;
