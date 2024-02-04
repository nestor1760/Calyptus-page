import { applyMiddleware, combineReducers, createStore } from "redux";
import { catalogReducer } from "./catalogReducer/catalogReducer";
import { filterReducer } from "./filterReducer/filterReducer";
import { thunk } from "redux-thunk";
import { sortReducer } from "./sortReducer/sortReducer";
import { wishListReducer } from "./wishListReducer/wishListReducer";
import { cartReducer } from "./cartReducer/cartReducer";
import { headerReducer } from "./headerReducer/headerReducer";
import { counterReducer } from "./counterReducer/counterReducer";
import { purchaseReducer } from "./purchaseReducer/purchaseReducer";
import { countryReducer } from "./countryReducer/countryReducer";
import { checkOutReducer } from "./checkOutReducer/checkOutReducer";
import { modalReducer } from "./modalReducer/modalReducer";

const rootReducer = combineReducers({
  catalog: catalogReducer,
  filter: filterReducer,
  sort: sortReducer,
  wishList: wishListReducer,
  cart: cartReducer,
  header: headerReducer,
  counter: counterReducer,
  purchase: purchaseReducer,
  country: countryReducer,
  checkOut: checkOutReducer,
  modal: modalReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))