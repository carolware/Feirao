// App.js

import React, { useState } from 'react';
import ProductList from './components/ProductList'; // Corrigir o caminho do import
import ShoppingCart from './components/ShoppingCart'; // Corrigir o caminho do import
import './index.css';

const App = () => {
  const [cart, setCart] = useState([]);
  
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
  };

  return (
    <div className="container">
      <h1>Feirão da Unievangélica</h1>
      <div className="content">
        <div className="products">
          <ProductList addToCart={addToCart} />
        </div>
        <div className="cart">
          <ShoppingCart cart={cart} removeFromCart={removeFromCart} calculateTotal={calculateTotal} />
        </div>
      </div>
    </div>
  );
};

export default App;
