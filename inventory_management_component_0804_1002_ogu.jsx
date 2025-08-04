// 代码生成时间: 2025-08-04 10:02:25
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// 定义组件的props类型
const propTypes = {
  initialInventory: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  })).isRequired,
};

// InventoryItem组件用于表示单个库存项
const InventoryItem = ({ id, name, quantity, onAdd, onRemove }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{quantity} in stock</p>
      <button onClick={() => onAdd(id)}>Add</button>
      <button onClick={() => onRemove(id)}>Remove</button>
    </div>
  );
};

// InventoryManagement组件
const InventoryManagement = ({ initialInventory }) => {
  const [inventory, setInventory] = useState(initialInventory);

  const addInventory = (itemId) => {
    const updatedInventory = inventory.map(item =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setInventory(updatedInventory);
  };

  const removeInventory = (itemId) => {
    const updatedInventory = inventory.map(item =>
      item.id === itemId && item.quantity > 0 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setInventory(updatedInventory);
  };

  return (
    <div>
      <h1>Inventory Management</h1>
      {inventory.map(item => (
        <InventoryItem
          key={item.id}
          id={item.id}
          name={item.name}
          quantity={item.quantity}
          onAdd={() => addInventory(item.id)}
          onRemove={() => removeInventory(item.id)}
        />
      ))}
    </div>
  );
};

// 设置propTypes
InventoryManagement.propTypes = propTypes;

export default InventoryManagement;
