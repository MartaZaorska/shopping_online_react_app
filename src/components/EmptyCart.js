import React from 'react';
import { Link } from 'react-router-dom';

import Copyright from '../components/Copyright';

function EmptyCart() {
  return (
    <React.Fragment>
      <section className='empty_cart'>
        <h1 className='empty_cart__title'>Your shopping cart is empty</h1>
        <Link to='/products/all' className='empty_cart__link'>
          <i className='fas fa-arrow-left'></i> back to products
        </Link>
      </section>
      <span className='title__background'>SMASHBOX</span>
      <Copyright />
    </React.Fragment>
  );
}

export default EmptyCart;
