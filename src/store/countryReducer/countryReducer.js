const SUCCESS_REQUEST = 'SUCCESS_REQUEST'
const LOADING_REQUEST = 'LOADING_REQUEST'
const ERROR_REQUEST = 'ERROR_REQUEST'


const initialState = {
  country: [],
  loading: false,
  error: false,
}

export const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_REQUEST:
      return {...state, country: action.payload}
    case LOADING_REQUEST:
      return {...state, error: null, country: null}
    case ERROR_REQUEST:
      return {...state, error: action.payload, loading: false}

    default:
      return state;
  }
}

export const actionSuccessRequest = (country) => ({type: SUCCESS_REQUEST, payload: country})
export const actionLoadingRequest = () => ({type: LOADING_REQUEST})
export const actionErrorRequest = (error) => ({type: ERROR_REQUEST, payload: error})