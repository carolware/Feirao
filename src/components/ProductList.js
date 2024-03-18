// src/components/ProductList.js
import React from 'react';
import Product from './Product';
import products from '../data/products'; // Certifique-se de importar corretamente os dados dos produtos

const ProductList = ({ addToCart }) => {
  return (
    <div>
      <h2>Produtos disponíveis</h2>
      <ul>
        {products.map(product => (
          <Product key={product.id} product={product} addToCart={addToCart} /> // Verifique se a prop addToCart está sendo passada corretamente
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
