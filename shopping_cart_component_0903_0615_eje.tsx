// 代码生成时间: 2025-09-03 06:15:06
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// TypeScript type for cart item
type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

// TypeScript type for cart state
type CartState = {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (itemId: string) => void;
  clearItem: (itemId: string) => void;
  checkout: () => void;
};

const ShoppingCartComponent: React.FC = () => {
  // State to manage cart items
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addItem = (item: CartItem) => {
    setCartItems(prevItems => [
      ...prevItems.map(prevItem => prevItem.id === item.id ? {...prevItem, quantity: prevItem.quantity + 1} : prevItem),
      ...(item.quantity ? [item] : [])
    ]);
  };

  const removeItem = (itemId: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  const clearItem = (itemId: string) => {
    setCartItems(prevItems => prevItems.map(item => item.id === itemId ? {...item, quantity: 0} : item));
  };

  const checkout = () => {
    console.log('Checkout process initiated...');
    // Add checkout logic here
  };

  // Render method
  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price} - Quantity: {item.quantity}
            <button onClick={() => addItem({ ...item, quantity: 1 })}>Add</button>
            <button onClick={() => clearItem(item.id)}>Clear</button>
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={checkout}>Checkout</button>
    </div>
  );
};

ShoppingCartComponent.propTypes = {
  // PropTypes can be added here if needed, but are not necessary for this example
};

export default ShoppingCartComponent;