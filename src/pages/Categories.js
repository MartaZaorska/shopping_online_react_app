import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import ShopContext from '../context/shopContext';

function Categories() {
  const context = useContext(ShopContext);

  return (
    <section>
      <Link to='/products/all'>All products</Link>
      {context.categories.map(category => (
        <Link key={`${category}-${Math.random()}`} to={`/products/${category}`}>
          {category}
        </Link>
      ))}
    </section>
  );
}

export default Categories;
