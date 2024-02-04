const SET_HOVER = 'SET_HOVER'
const SET_HOVER_THANKS_PAGE = 'SET_HOVER_PAGE'
const SET_HOVER_CONTACTS = 'SET_HOVER_CONTACTS'


const initialState = {
  hover: false,
  hoverThanksPage: false,
  hoverContancts: false,
}

export const modalReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_HOVER:
      return {...state, hover: action.payload}
    case SET_HOVER_THANKS_PAGE:
      return {...state, hoverThanksPage: action.payload}
    case SET_HOVER_CONTACTS:
      return {...state, hoverContancts: action.payload}

    default:
      return state
  }
}


export const setHover = payload => ({type: SET_HOVER, payload})
export const setHoverThanksPage = payload => ({type: SET_HOVER_THANKS_PAGE, payload})
export const setHoverContacts = payload => ({type: SET_HOVER_CONTACTS, payload})