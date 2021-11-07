import React from 'react';
import home from './home';
import Product from './product';

function SearchList({ filteredProd }) {
  const filtered = filteredProd.map(Product =>  <home key={Product.id} Product={title} />); 
  return (
    <div>
      {filtered}
    </div>
  );
}
