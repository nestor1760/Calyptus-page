const SET_NAME = 'SET_NAME';
const SET_LAST_NAME = 'SET_LAST_NAME';
const SET_PHONE_NUMBER = 'SET_PHONE_NUMBER';
const SET_EMAIL = 'SET_EMAIL';
const SET_COUNTRY_NAME = 'SET_COUNTRY_NAME';
const SET_REGION = 'SET_REGION';
const SET_CITY = 'SET_CITY';
const SET_POST_OFFICE_NUMBER = 'SET_POST_OFFICE_NUMBER';
const SET_PAYMENY_METHOD_NAME = 'SET_PAYMENY_METHOD_NAME';
const SET_DELIVERY_METHOD_NAME = 'SET_DELIVERY_METHOD_NAME';

const initialState = {
  name: '',
  lastName: '',
  phoneNumber: '',
  email: '',
  countryName: '',
  region: '',
  city: '',
  postOfficeNumber: '',
  paymentMethodName: '',
  deliveryMethodName: '',
}

export const checkOutReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NAME:
      return {...state, name: action.payload}
    case SET_LAST_NAME:
      return {...state, lastName: action.payload}
    case SET_PHONE_NUMBER:
      return {...state, phoneNumber: action.payload}
    case SET_EMAIL:
      return {...state, email: action.payload}
    case SET_COUNTRY_NAME:
      return {...state, countryName: action.payload}
    case SET_REGION:
      return {...state, region: action.payload}
    case SET_CITY:
      return {...state, city: action.payload}
    case SET_POST_OFFICE_NUMBER:
      return {...state, postOfficeNumber: action.payload}
    case SET_PAYMENY_METHOD_NAME:
      return {...state, paymentMethodName: action.payload}
    case SET_DELIVERY_METHOD_NAME:
      return {...state, deliveryMethodName: action.payload}

    default:
      return state;
  }
}

export const setName = name => ({type: SET_NAME, payload: name})
export const setLastName = lastName => ({type: SET_LAST_NAME, payload: lastName})
export const setPhoneNumber = phoneNumber => ({type: SET_PHONE_NUMBER, payload: phoneNumber})
export const setEmail = email => ({type: SET_EMAIL, payload: email})
export const setCountryName = countryName => ({type: SET_COUNTRY_NAME, payload: countryName})
export const setRegion = region => ({type: SET_REGION, payload: region})
export const setCity = city => ({type: SET_CITY, payload: city})
export const setPostOfficeNumber = postOfficeNumber => ({type: SET_POST_OFFICE_NUMBER, payload: postOfficeNumber})
export const setPaymentMethodName = paymentMethodName => ({type: SET_PAYMENY_METHOD_NAME, payload: paymentMethodName})
export const setDeliveryMethodName = deliveryMethodName => ({type: SET_DELIVERY_METHOD_NAME, payload: deliveryMethodName})

