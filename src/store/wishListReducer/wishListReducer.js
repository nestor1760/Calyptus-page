const ADD_ITEM_TO_WISH_LIST = 'ADD_ITEM_TO_WISH_LIST';
const REMOVE_ITEM_FROM_WISH_LIST = 'REMOVE_ITEM_FROM_WISH_LIST';


const saveToLocalStorage = (state) => {
  localStorage.setItem('wishList', JSON.stringify(state.wishList));
}

const loadFromLocalStorage = () => {
  const storedWishList = localStorage.getItem('wishList');
  return storedWishList ? JSON.parse(storedWishList) : [];
}

export const wishListReducer = (state = {wishList: loadFromLocalStorage()}, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_WISH_LIST:
      const newStateAdd =  {...state, wishList: [...state.wishList, action.payload]}
      saveToLocalStorage(newStateAdd)
      return newStateAdd
    case REMOVE_ITEM_FROM_WISH_LIST:
      const newStateRemove =  {...state, wishList: state.wishList.filter(p => p.id !== action.payload)}
      saveToLocalStorage(newStateRemove);
      return newStateRemove;
      
      default:
      return state;
  }
}


export const addToWishList = (product) => ({type: ADD_ITEM_TO_WISH_LIST, payload: product})
export const removeFromWishList = (product) => ({type: REMOVE_ITEM_FROM_WISH_LIST, payload: product})