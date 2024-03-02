// Cart.js
import React from 'react';
import './Cart.css';
import './belt.png';

const Cart = ({ items, removeFromCart, updateQuantity }) => {
  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-items" align='center'>
      {items.map(item => (
        <div key={item.id} className="cart-item">
          <div className="item-details">
            <h4>{item.name}</h4>
            <p>{item.img}</p>
            <p>Price: ${item.price}</p>
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
              min="0"
            />
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="total">
        <h3>Total: ${total}</h3>
      </div>
    </div>
  );
};

export default Cart;