// 代码生成时间: 2025-09-11 05:42:38
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// 使用TypeScript进行类型定义
interface UrlValidatorProps {
  onValidUrl: (url: string) => void;
}

// 定义URL验证模式
const urlSchema = yup.string()
  .url('必须是一个有效的URL')
  .required('URL是必填项');

// URL验证组件
const UrlValidatorComponent: React.FC<UrlValidatorProps> = ({ onValidUrl }) => {
  const { register, handleSubmit, formState: { errors }, control } = useForm<{ url: string }, { url: string }>({ resolver: yupResolver(urlSchema) });
  const [isValidUrl, setIsValidUrl] = useState(false);

  const onSubmit = (data) => {
    if (data.url) {
      onValidUrl(data.url);
      setIsValidUrl(true);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="url" >URL:</label>
      <input
        id="url"
        name="url"
        {...register('url')}
      />
      {errors.url && <p>{errors.url.message}</p>}
      <button type="submit">验证URL</button>
      {isValidUrl && <p>URL有效</p>}
    </form>
  );
};

// 定义propTypes
UrlValidatorComponent.propTypes = {
  onValidUrl: PropTypes.func.isRequired,
};

// 导出组件
export default UrlValidatorComponent;