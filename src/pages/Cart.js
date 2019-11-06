import React, { useContext } from 'react';
import ShopContext from '../context/shopContext';

function Cart() {
  const context = useContext(ShopContext);

  const getTotalPrice = cart => {
    let total = 0;
    cart.forEach(
      item => (total += parseFloat((item.quantity * item.price).toFixed(2)))
    );
    return total;
  };

  if (context.cart.length === 0) return <section>Empty Cart</section>;

  return (
    <section>
      <p>Your shopping cart</p>
      {context.cart.map(item => (
        <section key={item.id}>
          <img src={`${item.image_link}`} alt={`${item.name}`} />
          <h4>{item.name}</h4>
          <p>Price ${item.price}</p>
          <section>
            Quantity{' '}
            <button onClick={() => context.removeProduct(item.id)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => context.addProduct(item, 1)}>+</button>
          </section>
          <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
        </section>
      ))}
      <button onClick={() => context.clearCart()}>
        Clear your shopping cart
      </button>
      <h3>Total price: ${getTotalPrice(context.cart)}</h3>
    </section>
  );
}

export default Cart;
