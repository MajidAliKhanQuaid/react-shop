import { createStore, compose } from "redux";
import rootReducer from "./reducers/";
// export function reducer(state = {}, action) {
//   console.log(action);
//   if (action.type == "update_count") {
//     return { ...state, count: action.data };
//   } else if (action.type == "user_updated") {
//     return { ...state, user: action.data };
//   }

//   return state;
// }

// export const store = createStore(reducer);
export const store = compose(
  window.devToolsExtension && window.devToolsExtension()
)(createStore)(rootReducer);
