import React from 'react';
import { Link } from 'react-router-dom';

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
      <p className='empty_cart_copyright'>
        Created by{' '}
        <a
          rel='noopener noreferrer'
          className='cart_copyright__link'
          href='https://martazaorska.github.io/portfolio/'
          target='_blank'
        >
          Marta Zaorska
        </a>
        <br />
        &copy; Shopping App {new Date().getFullYear()}
      </p>
    </React.Fragment>
  );
}

export default EmptyCart;
