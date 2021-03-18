import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import productsReducer from "./products.reducer";
import shopReducer from "./shop.reducer";
import cartReducer from "./cart.reducer";

const rootReducer = combineReducers({
  shopState: shopReducer,
  productState: productsReducer,
  userState: userReducer,
  cartState: cartReducer,
});

export default rootReducer;
