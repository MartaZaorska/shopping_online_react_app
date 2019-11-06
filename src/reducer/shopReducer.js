export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const CLEAR_CART = 'CLEAR_CART';

const addProduct = (product, quantity, state) => {
  const cart = [...state.cart];
  const productIndex = cart.findIndex(item => item.id === product.id);

  productIndex < 0
    ? cart.push({ ...product, quantity })
    : (cart[productIndex].quantity += quantity);

  localStorage.setItem('shopping_cart', JSON.stringify(cart));

  return { ...state, cart };
};

const removeProduct = (productId, state) => {
  const cart = [...state.cart];
  const productIndex = cart.findIndex(item => item.id === productId);

  cart[productIndex].quantity === 1
    ? cart.splice(productIndex, 1)
    : (cart[productIndex].quantity -= 1);

  localStorage.setItem('shopping_cart', JSON.stringify(cart));

  return { ...state, cart };
};

export const shopReducer = (state, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return addProduct(action.product, action.quantity, state);
    case REMOVE_PRODUCT:
      return removeProduct(action.productId, state);
    case CLEAR_CART:
      localStorage.setItem('shopping_cart', JSON.stringify([]));
      return {
        ...state,
        cart: []
      };
    default:
      return state;
  }
};
