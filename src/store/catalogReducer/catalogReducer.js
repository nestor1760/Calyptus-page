
const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
const REQUEST_LOADING = 'REQUEST_LOADING';
const REQUEST_ERROR = 'REQUEST_ERROR';


const defaultState = {
  catalogProducts: [],
  loading: true,
  error: null,
}


export const catalogReducer = (state = defaultState, action) => {
  switch (action.type) {
    case REQUEST_SUCCESS:
      return {...state, loading: false, error: null, catalogProducts: action.payload}
    case REQUEST_LOADING:
      return {...state, loading: true, error: null, catalogProducts: null}
    case REQUEST_ERROR:
      return {...state, loading: false, error: action.payload}

    default:
      return state
  }
}

export const catalogActionRequestSuccess = catalogProducts => ({type: REQUEST_SUCCESS, payload: catalogProducts})
export const catalogActionRequestLoading = () => ({type: REQUEST_LOADING})
export const catalogActionRequestError = error => ({type: REQUEST_ERROR, payload: error})