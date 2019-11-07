import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import ShopContext from '../context/shopContext';
import Navbar from '../components/Navbar';
import SelectCategories from '../components/SelectCategories';

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

  const changeCategory = category => {
    props.history.push(`/products/${category}`);
  };

  if (products.length === 0) return <section>Loading...</section>;

  return (
    <React.Fragment>
      <Navbar cart={context.cart} />
      <section className='products'>
        <SelectCategories
          changeCategory={changeCategory}
          activeCategory={props.match.params.category}
          categories={context.categories}
        />
        <section className='products__content'>
          {products.map(product => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className='products_item'
            >
              <img
                src={`${product.image_link}`}
                alt={`${product.name}`}
                className='products_item__image'
              />
              <h4 className='products_item__title'>{product.name}</h4>
            </Link>
          ))}
        </section>
      </section>
    </React.Fragment>
  );
}

export default Products;
