// 代码生成时间: 2025-09-17 18:00:34
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// FormValidatorComponent
const FormValidatorComponent = ({ validate }) => {
  // State to manage form data
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  // State to manage form errors
  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Validate form data
  const validateForm = () => {
    const newErrors = validate(formData);
    setErrors(newErrors);
  };

  // Render form fields
  const renderFormFields = () => {
    return Object.keys(formData).map((field) => {
      return (
        <div key={field}>
          <label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
          <input
            type="text"
            id={field}
            name={field}
            value={formData[field]}
            onChange={handleChange}
          />
          {errors[field] && <p>{errors[field]}</p>}
        </div>
      );
    });
  };

  return (
    <form>
      {renderFormFields()}
      <button type="button" onClick={validateForm}>Validate</button>
    </form>
  );
};

// Prop validation
FormValidatorComponent.propTypes = {
  validate: PropTypes.func.isRequired,
};

export default FormValidatorComponent;
