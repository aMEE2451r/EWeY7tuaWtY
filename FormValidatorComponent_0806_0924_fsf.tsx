// 代码生成时间: 2025-08-06 09:24:59
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// PropTypes 验证
const FormValidatorComponentPropTypes = {
  validate: PropTypes.exact({
    name: PropTypes.func.isRequired,
    email: PropTypes.func.isRequired,
  }).isRequired,
};

// TypeScript 类型定义
type ValidatorFn = (value: string) => boolean;
type Validator = {
  name: ValidatorFn;
  email: ValidatorFn;
};
type FormValidatorProps = {
  validate: Validator;
};

// 函数组件
const FormValidatorComponent: React.FC<FormValidatorProps> = ({ validate }) => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [errors, setErrors] = useState({ name: false, email: false });

  // 表单提交事件处理
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (validateForm()) {
      console.log('Form is valid:', formData);
    } else {
      console.log('Form has errors');
    }
  };

  // 表单字段变化事件处理
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 表单验证
  const validateForm = () => {
    let newErrors = { ...errors };
    if (!validate.name(formData.name)) {
      newErrors.name = true;
    } else {
      newErrors.name = false;
    }
    if (!validate.email(formData.email)) {
      newErrors.email = true;
    } else {
      newErrors.email = false;
    }
    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p>Name is required and must be at least 3 characters long.</p>}
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p>Please enter a valid email address.</p>}
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

FormValidatorComponent.propTypes = FormValidatorComponentPropTypes;

export default FormValidatorComponent;