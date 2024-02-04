const INCREMENT_COUNTS = 'INCREMENT_COUNTS'
const DECREMENT_COUNTS = 'DECREMENT_COUNTS'
const SET_COUNTS = 'SET_COUNTS'

const initialState = {
  counts: JSON.parse(localStorage.getItem('cartCounts')) || 1,
}

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COUNTS:
      return {...state, counts: action.payload}

    case INCREMENT_COUNTS:
      const updatedCountsInc = [...state.counts];
      updatedCountsInc[action.payload.index] += 1;
      return { ...state, counts: updatedCountsInc };

    case DECREMENT_COUNTS:
      const updatedCountsDec = [...state.counts];
      if (updatedCountsDec[action.payload.index] > 1) {
        updatedCountsDec[action.payload.index] -= 1;
      }
      return { ...state, counts: updatedCountsDec };

      default:
        return state
  }
}

export const setCounts = (payload) => ({type: SET_COUNTS, payload: payload});
export const incrementCounts = (index) => ({type: INCREMENT_COUNTS, payload: { index }});
export const decrementCounts = (index) => ({type: DECREMENT_COUNTS, payload: { index }});