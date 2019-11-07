import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar({ cart }) {
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    if (cart.length !== 0) {
      let qty = 0;
      cart.forEach(item => (qty += item.quantity));
      setQuantity(qty);
    }
  }, [cart]);

  return (
    <nav className='nav'>
      <Link to='/cart' className='cart__link'>
        <i className='fas fa-shopping-bag'></i>
        {quantity !== 0 ? (
          <span className='cart__link--qty'>{quantity}</span>
        ) : null}
      </Link>
    </nav>
  );
}

export default Navbar;
