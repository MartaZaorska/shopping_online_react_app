import React, { useContext, useState, useEffect } from 'react';
import ShopContext from '../context/shopContext';
import { Link } from 'react-router-dom';

function ProductItem(props) {
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const context = useContext(ShopContext);

  useEffect(() => {
    const id = props.match.params.id;
    if (context.products.length !== 0) {
      setProduct({
        ...context.products.find(item => item.id === parseInt(id))
      });
    }
  }, [props.match.params.id, context.products]);

  const addToCart = () => {
    context.addProduct(product, quantity);
    setQuantity(1);
  };

  if (Object.keys(product).length === 0) return <section>Loading...</section>;

  return (
    <section>
      <img src={`${product.image_link}`} alt={`${product.name}`} />
      <h2>{product.name}</h2>
      <p>{product.brand}</p>
      <h5>${product.price}</h5>
      <section>
        <button
          disabled={quantity === 1}
          onClick={() => setQuantity(quantity - 1)}
        >
          -
        </button>
        <span>{quantity}</span>
        <button onClick={() => setQuantity(quantity + 1)}>+</button>
      </section>
      <button onClick={addToCart}>Add to Cart</button>
      <Link to='/cart'>Go to shopping cart</Link>
    </section>
  );
}

export default ProductItem;
