import React from 'react';

import { Link } from 'react-router-dom';

function Home() {
  const imageSRC =
    document.body.getBoundingClientRect().width >= 768
      ? './images/home1.png'
      : './images/home.png';

  return (
    <section className='home'>
      <header className='home__header'>
        <h1 className='home__title'>smashbox</h1>
        <p className='home__text'>shop online</p>
        <Link to='/products/all' className='home__link'>
          <i className='fas fa-angle-down'></i>
        </Link>
      </header>
      <img className='home__image' src={imageSRC} alt='home' />
    </section>
  );
}

export default Home;
