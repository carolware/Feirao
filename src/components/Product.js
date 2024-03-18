
import React from 'react';

const Product = ({ product, addToCart }) => {
  return (
    <li>
      <div>{product.name} - ${product.price}</div>
      <button onClick={() => addToCart(product)}>Adicionar ao carrinho</button> 
    </li>
  );
};

export default Product;
