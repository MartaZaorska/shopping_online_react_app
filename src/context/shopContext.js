import React, { useReducer, useEffect, useState } from 'react';

import {
  shopReducer,
  ADD_PRODUCT,
  CLEAR_CART,
  REMOVE_PRODUCT
} from '../reducer/shopReducer';

const ShopContext = React.createContext({});
export default ShopContext;

const prepareData = data => {
  const products = [];
  data.forEach(item => {
    products.push({
      id: item.id,
      brand: item.brand,
      name: item.name,
      price: item.price,
      image_link: item.image_link,
      product_link: item.product_link,
      product_type: item.product_type,
      product_colors: [...item.product_colors]
    });
  });
  return products;
};

export function Provider(props) {
  const categories = [
    'blush',
    'bronzer',
    'eyebrow',
    'eyeliner',
    'eyeshadow',
    'foundation',
    'lipstick',
    'mascara'
  ];
  const [products, setProducts] = useState([]);

  const [state, dispatch] = useReducer(shopReducer, { cart: [] }, () => {
    const storeCart = localStorage.getItem('shopping_cart');
    return storeCart === null ? { cart: [] } : { cart: JSON.parse(storeCart) };
  });

  useEffect(() => {
    getProducts()
      .then(data => {
        setProducts(prepareData(data));
      })
      .catch(err => console.log(err));
  }, []);

  const getProducts = () => {
    return new Promise((resolve, reject) => {
      fetch(
        'https://cors-anywhere.herokuapp.com/http://makeup-api.herokuapp.com/api/v1/products.json?brand=smashbox'
      )
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  };

  const addProduct = (product, quantity) =>
    dispatch({ type: ADD_PRODUCT, product, quantity });

  const removeProduct = productId =>
    dispatch({ type: REMOVE_PRODUCT, productId });

  const clearCart = () => dispatch({ type: CLEAR_CART });

  return (
    <ShopContext.Provider
      value={{
        products,
        categories,
        cart: state.cart,
        addProduct,
        removeProduct,
        clearCart
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
}
