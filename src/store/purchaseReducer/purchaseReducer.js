const SET_TAX = 'SET_TAX'
const SET_PROMO = 'SET_PROMO'
const SET_CORRECT_PROMO = 'SET_CORRECT_PROMO'


const initialState = {
  tax: 21,
  promo: '',
  correctPromo: false,
}

export const purchaseReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TAX:
      return {...state, tax: action.payload}
    case SET_PROMO:
      return {...state, promo: action.payload}
    case SET_CORRECT_PROMO:
      return {...state, correctPromo: action.payload}
  
    default:
      return state;
  }
}

export const setTax = payload => ({type: SET_TAX, payload: payload})
export const setPromo = payload => ({type: SET_PROMO, payload: payload})
export const setCorrectPromo = payload => ({type: SET_CORRECT_PROMO, payload: payload})