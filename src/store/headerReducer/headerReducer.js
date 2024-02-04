const SET_SEARCH_INPUT = 'SET_SEARCH_INPUT';
const SET_HEADER_MENU = 'SET_HEADER_MENU';
const SET_WISH_LIST_ICON = 'SET_WISH_LIST_ICON';
const SET_CART_ICON = 'SET_CART_ICON';
const SET_SCROLL = 'SET_SCROLL';


const initialState = {
  searchInput: false,
  headerMenu: null,
  wishListIcon: false,
  cartIcon: false,
  scroll: false,
}

export const headerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_INPUT:
      return {...state, searchInput: action.payload}
    case SET_HEADER_MENU:
      return {...state, headerMenu: action.payload}
    case SET_WISH_LIST_ICON:
      return {...state, wishListIcon: action.payload}
    case SET_CART_ICON:
      return {...state, cartIcon: action.payload}
    case SET_SCROLL:
      return {...state, scroll: action.payload}

    default:
      return state;
  }
}

export const setSearchInput = state => ({type: SET_SEARCH_INPUT, payload: state})
export const setHeaderMenu = state => ({type: SET_HEADER_MENU, payload: state})
export const setWishListIcon = state => ({type: SET_WISH_LIST_ICON, payload: state})
export const setCartIcon = state => ({type: SET_CART_ICON, payload: state})
export const setScroll = state => ({type: SET_SCROLL, payload: state})