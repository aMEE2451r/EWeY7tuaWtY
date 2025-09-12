// 代码生成时间: 2025-09-12 09:45:05
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// 使用 PropTypes 进行类型定义
const FormValidatorComponent = ({ onSubmit }) => {
    // 使用 state 进行表单数据管理
    const [formData, setFormData] = useState({ username: '', email: '' });
    const [errors, setErrors] = useState({});

    // 表单数据验证函数
    const validateForm = () => {
        let newErrors = {};
        if (!formData.username) {
            newErrors.username = 'Username is required';
        }
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // 处理表单输入变化
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // 提交表单并验证
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            onSubmit(formData);
        }
    };

    // 渲染表单和错误信息
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username:</label>
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                />
                {errors.username && <p>{errors.username}</p>}
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                {errors.email && <p>{errors.email}</p>}
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

// PropTypes 验证
FormValidatorComponent.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default FormValidatorComponent;
    