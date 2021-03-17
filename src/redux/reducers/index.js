import { combineReducers } from "redux";
import nasaReducer from "./nasa.reducer";
import shopReducer from "./shop.reducer";

const rootReducer = combineReducers({
  shop: shopReducer,
  nasa: nasaReducer,
});

export default rootReducer;
