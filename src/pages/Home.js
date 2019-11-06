import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className='home'>
      <Link to='/categories'>Go shopping</Link>
    </section>
  );
}

export default Home;
