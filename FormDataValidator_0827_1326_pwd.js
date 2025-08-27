// 代码生成时间: 2025-08-27 13:26:05
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Define the shape of the expected form data
const formDataShape = {
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
};

// Define the shape of the validation errors
const errorsShape = {
  username: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string
};

// FormDataValidator component
const FormDataValidator = ({ formData, errors, onValidate }) => {
  // State to hold the validated form data
  const [validatedData, setValidatedData] = useState({});

  // Validate form data function
  const validateData = () => {
    const { username, email, password } = formData;
    let validationErrors = {};
    
    // Perform basic validation
    if (!username || username.trim() === '') {
      validationErrors.username = 'Username is required.';
    }
    if (!email || !email.includes('@')) {
      validationErrors.email = 'Email must be a valid email address.';
    }
    if (!password || password.length < 6) {
      validationErrors.password = 'Password must be at least 6 characters long.';
    }
    
    // Call the onValidate callback with errors or validated data
    if (Object.keys(validationErrors).length === 0) {
      onValidate(null, validatedData);
    } else {
      onValidate(validationErrors, null);
    }
  };

  // Handle form data change and update state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValidatedData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Render form fields and validation messages
  return (
    <form>
      <input
        type="text"
        name="username"
        value={validatedData.username || ''}
        onChange={handleChange}
      />
      {errors.username && <div>{errors.username}</div>}

      <input
        type="email"
        name="email"
        value={validatedData.email || ''}
        onChange={handleChange}
      />
      {errors.email && <div>{errors.email}</div>}

      <input
        type="password"
        name="password"
        value={validatedData.password || ''}
        onChange={handleChange}
      />
      {errors.password && <div>{errors.password}</div>}

      <button type="button" onClick={validateData}>Validate</button>
    </form>
  );
};

// PropTypes for the component
FormDataValidator.propTypes = {
  formData: formDataShape.isRequired,
  errors: errorsShape,
  onValidate: PropTypes.func.isRequired
};

export default FormDataValidator;