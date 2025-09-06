// 代码生成时间: 2025-09-07 06:55:59
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const LoginValidationComponent = ({ onLogin }) => {
  // 状态管理
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // 处理登录
  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'password') {
      onLogin(username);
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

// PropTypes检查
LoginValidationComponent.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default LoginValidationComponent;