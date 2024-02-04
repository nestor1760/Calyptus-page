const SET_SELECTED_SORT = 'SET_SELECTED_SORT'

const initialState = {
  selectedSort: 'default',
}

export const sortReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_SELECTED_SORT:
      return {...state, selectedSort: action.payload}

    default:
      return state;
  }
}

export const setSelectedSort = sort => ({type: SET_SELECTED_SORT, payload: sort})