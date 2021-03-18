const initialState = { items: [] };
export default function productsReducer(state = initialState, action) {
  if (action.type == "PRODUCTS_UPDATE") {
    let products = action.payload;
    return { ...state, items: products };
  }
  return state;
}
