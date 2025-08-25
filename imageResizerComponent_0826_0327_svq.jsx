// 代码生成时间: 2025-08-26 03:27:05
// imageResizerComponent.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types'; // 引入PropTypes

// 定义组件的propTypes
const propTypes = {
  initialSize: PropTypes.number, // 初始尺寸
  images: PropTypes.arrayOf(PropTypes.string).isRequired, // 图片数组
};

// 定义组件的默认属性
const defaultProps = {
  initialSize: 100,
};

function ImageResizerComponent({ initialSize, images }) {
  // 使用useState管理尺寸
  const [size, setSize] = useState(initialSize);

  const handleResize = (newSize) => {
    setSize(newSize);
  };

  return (
    <div>
      <input
        type="range"
        min="50"
        max="200"
        value={size}
        onChange={(e) => handleResize(e.target.value)}
      />
      <div>
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Image ${index}`}
            style={{ width: size, height: size }}
          />
        ))}
      </div>
    </div>
  );
}

// 设置propTypes和defaultProps
ImageResizerComponent.propTypes = propTypes;
ImageResizerComponent.defaultProps = defaultProps;

export default ImageResizerComponent;
