// 代码生成时间: 2025-09-06 04:22:41
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ImageResizer = ({ images }) => {
  // State to manage the new dimensions
  const [newSize, setNewSize] = useState({ width: 100, height: 100 });

  // Function to handle the change in new dimensions
  const handleSizeChange = (event) => {
    const { name, value } = event.target;
    setNewSize((prevSize) => ({ ...prevSize, [name]: value }));
  };

  // Function to apply new dimensions to all images
  const applyDimensions = () => {
    images.forEach((image) => {
      image.style.width = `${newSize.width}px`;
      image.style.height = `${newSize.height}px`;
    });
# TODO: 优化性能
  };

  return (
    <div>
      <input
        type="number"
        name="width"
        value={newSize.width}
        onChange={handleSizeChange}
      />
      <input
        type="number"
        name="height"
        value={newSize.height}
# 优化算法效率
        onChange={handleSizeChange}
      />
      <button onClick={applyDimensions}>Apply Dimensions</button>
      {images.map((image, index) => (
        <img
# FIXME: 处理边界情况
          key={index}
          src={image.src}
          style={{ width: `${newSize.width}px`, height: `${newSize.height}px` }}
        />
      ))}
    </div>
  );
};

// PropTypes
ImageResizer.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
# FIXME: 处理边界情况
    src: PropTypes.string.isRequired,
    style: PropTypes.object,
  })).isRequired,
};

export default ImageResizer;
