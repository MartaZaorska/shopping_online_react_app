import React from 'react';

function Copyright() {
  return (
    <p className='cart_copyright'>
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
  );
}

export default Copyright;
