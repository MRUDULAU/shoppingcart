// Product.js
import React from 'react';
import './Product.css';

const Product = ({ id, name, img, price, addToCart }) => {
  return (
    <div align='center'>
    <div className="product" align='center'>
      <h3>{name}</h3>
      <img src={img} alt={name} />
      <p>Price: ${price}</p>
      <button onClick={() => addToCart({ id, name, price })}>Add to Cart</button>
    </div>
    </div>
  );
};

export default Product;