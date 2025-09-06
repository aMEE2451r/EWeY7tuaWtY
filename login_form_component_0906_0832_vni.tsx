// 代码生成时间: 2025-09-06 08:32:09
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const LoginForm = ({ onLoginSuccess }) => {
  // State to manage the input fields and form submission status
  const [user, setUser] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  
  // Handle input field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };
  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate login request (replace with real API call)
    try {
      const response = await fakeApiLogin(user);
      if (response.success) {
        onLoginSuccess(response.user);
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      setErrors({ ...errors, login: error.message });
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='username'>Username:</label>
        <input
          type='text'
          id='username'
          name='username'
          value={user.username}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor='password'>Password:</label>
        <input
          type='password'
          id='password'
          name='password'
          value={user.password}
          onChange={handleChange}
          required
        />
      </div>
      {loading ? <p>Loading...</p> : <button type='submit'>Login</button>}
      {errors.login && <p>{errors.login}</p>}
    </form>
  );
};

// PropTypes checking
LoginForm.propTypes = {
  onLoginSuccess: PropTypes.func.isRequired,
};

// Define a dummy API function to simulate a login request
async function fakeApiLogin(credentials) {
  // Replace with real API call logic
  if (credentials.username === 'admin' && credentials.password === 'password') {
    return { success: true, user: { username: credentials.username } };
  } else {
    return { success: false, message: 'Invalid credentials' };
  }
}

export default LoginForm;
