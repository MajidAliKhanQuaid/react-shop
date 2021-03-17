import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import productsReducer from "./products.reducer";
import shopReducer from "./shop.reducer";
import cartReducer from "./cart.reducer";

const rootReducer = combineReducers({
  shop: shopReducer,
  products: productsReducer,
  user: userReducer,
  cart: cartReducer,
});

export default rootReducer;
