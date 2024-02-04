//filter action types
const SET_SELECTED_STYLES = 'SET_SELECTED_STYLES';
const SET_SELECTED_BRANDS = 'SET_SELECTED_BRANDS';
const SET_SELECTED_COLORS = 'SET_SELECTED_COLORS';
const SET_SELECTED_MATERIALS = 'SET_SELECTED_MATERIALS';
const SET_MIN_PRICE = 'SET_MIN_PRICE';
const SET_MAX_PRICE = 'SET_MAX_PRICE';
const SET_SHOW_FILTER = 'SET_SHOW_FILTER'


const initialState = {
  selectedStyles: [],
  selectedBrands: [],
  selectedColors: [],
  selectedMaterials: [],
  minPrice: 0,
  maxPrice: 3000,
  showFilter: null,
}

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_STYLES:
      return {...state, selectedStyles: action.payload}
    case SET_SELECTED_BRANDS:
      return {...state, selectedBrands: action.payload}
    case SET_SELECTED_COLORS:
      return {...state, selectedColors: action.payload}
    case SET_SELECTED_MATERIALS:
      return {...state, selectedMaterials: action.payload}
    case SET_MIN_PRICE:
      return {...state, minPrice: action.payload}
    case SET_MAX_PRICE:
      return {...state, maxPrice: action.payload}
    case SET_SHOW_FILTER:
      return {...state, showFilter: action.payload}

    default:
      return state;
  }
}


export const setSelectedStyles = (selectedStyle) => ({type: SET_SELECTED_STYLES, payload: selectedStyle})
export const setSelectedBrands = (selectedBrand) => ({type: SET_SELECTED_BRANDS, payload: selectedBrand})
export const setSelectedColors = (selectedColor) => ({type: SET_SELECTED_COLORS, payload: selectedColor})
export const setSelectedMaterials = (selectedMaterial) => ({type: SET_SELECTED_MATERIALS, payload: selectedMaterial})
export const setMinPrice = (minPrice) => ({type: SET_MIN_PRICE, payload: minPrice})
export const setMaxPrice = (maxPrice) => ({type: SET_MAX_PRICE, payload: maxPrice})
export const setShowFilter = (showFilter) => ({type: SET_SHOW_FILTER, payload: showFilter})