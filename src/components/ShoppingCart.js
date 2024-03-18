// ShoppingCart.js

import React from 'react';

const ShoppingCart = ({ cart, removeFromCart, calculateTotal }) => {
  return (
    <div>
      <h2>Carrinho</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            <span>{item.name}</span>
            <span>${item.price}</span>
            <button onClick={() => removeFromCart(item.id)}>Remover</button>
          </li>
        ))}
      </ul>
      <p>Total: ${calculateTotal()}</p>
    </div>
  );
};

export default ShoppingCart;
