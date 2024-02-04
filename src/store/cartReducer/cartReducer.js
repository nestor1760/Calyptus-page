const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART';
const REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART';
const CLEAR_CART = 'CLEAR_CART';


const saveToLocalStorage = (state) => {
  localStorage.setItem('cart', JSON.stringify(state.cart));
}

const loadFromLocalStorage = () => {
  const storedCart = localStorage.getItem('cart');
  return storedCart ? JSON.parse(storedCart) : [];
}

export const cartReducer = (state = {cart: loadFromLocalStorage()}, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      const newStateAdd =  {...state, cart: [...state.cart, action.payload]}
      saveToLocalStorage(newStateAdd)
      return newStateAdd
    case REMOVE_ITEM_FROM_CART:
      const newStateRemove =  {...state, cart: state.cart.filter(p => p.id !== action.payload)}
      saveToLocalStorage(newStateRemove);
      return newStateRemove;
    case CLEAR_CART:
      const newStateClear =  {...state, cart: []}
      saveToLocalStorage(newStateClear);
      return newStateClear;
      
      default:
      return state;
  }
}


export const addToCart = (product) => ({type: ADD_ITEM_TO_CART, payload: product})
export const removeFromCart = (product) => ({type: REMOVE_ITEM_FROM_CART, payload: product})
export const clearCart = () => ({type: CLEAR_CART})