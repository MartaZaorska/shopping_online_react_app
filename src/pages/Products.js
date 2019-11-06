import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import ShopContext from '../context/shopContext';

function Products(props) {
  const [products, setProducts] = useState([]);
  const context = useContext(ShopContext);

  useEffect(() => {
    const category = props.match.params.category;
    if (context.products.length !== 0) {
      category === 'all'
        ? setProducts([...context.products])
        : setProducts([
            ...context.products.filter(
              item => item['product_type'] === category
            )
          ]);
    }
  }, [props.match.params.category, context.products]);

  if (products.length === 0) return <section>Loading...</section>;

  return (
    <section>
      {products.map(product => (
        <section key={product.id}>
          <img src={`${product.image_link}`} alt={`${product.name}`} />
          <h4>
            <Link to={`/product/${product.id}`}>{product.name}</Link>
          </h4>
        </section>
      ))}
    </section>
  );
}

export default Products;
