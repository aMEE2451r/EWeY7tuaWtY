// 代码生成时间: 2025-08-06 19:19:21
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// 定义组件Props类型
const propTypes = {
  initialValue: PropTypes.string,
};

// 定义组件默认Props
const defaultProps = {
  initialValue: "",
};

// 函数组件
const PasswordEncryptDecrypt = ({ initialValue }) => {
  // state管理，初始密码为空
  const [password, setPassword] = useState(initialValue);

  // 加密函数，这里使用简单的字符串翻转作为示例
  const encrypt = () => {
    const encrypted = password.split('').reverse().join('');
    setPassword(encrypted);
  };

  // 解密函数，同样是字符串翻转
  const decrypt = () => {
    const decrypted = password.split('').reverse().join('');;
    setPassword(decrypted);
  };

  return (
    <div>
      <h2>Password Encrypt/Decrypt Tool</h2>
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Password"
      />
      <button onClick={encrypt}>Encrypt</button>
      <button onClick={decrypt}>Decrypt</button>
    </div>
  );
};

PasswordEncryptDecrypt.propTypes = propTypes;
PasswordEncryptDecrypt.defaultProps = defaultProps;

export default PasswordEncryptDecrypt;