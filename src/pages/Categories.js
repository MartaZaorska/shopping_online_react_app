import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import ShopContext from '../context/shopContext';
import Navbar from '../components/Navbar';

function Categories() {
  const context = useContext(ShopContext);

  return (
    <React.Fragment>
      <Navbar cart={context.cart} />
      <section className='categories'>
        <h3 className='categories__subtitle'>Select category</h3>
        <section className='categories__content'>
          <Link className='categories_item' to='/products/all'>
            <i className='categories_item__icon fas fa-ellipsis-h'></i>
            <h4 className='categories_item__title'>all</h4>
          </Link>
          {context.categories.map(category => (
            <Link
              className='categories_item'
              key={`${category}-${Math.random()}`}
              to={`/products/${category}`}
            >
              <img
                className='categories_item__image'
                src={`./images/${category}.png`}
                alt={`${category}`}
              />
              <h4 className='categories_item__title'>{category}</h4>
            </Link>
          ))}
        </section>
      </section>
      <span className='title__background'>SMASHBOX</span>
    </React.Fragment>
  );
}

export default Categories;
