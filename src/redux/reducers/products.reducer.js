const initialState = { items: [], categories: [] };
export default function productsReducer(state = initialState, action) {
  if (action.type == "PRODUCTS_UPDATE") {
    let products = action.payload;
    return { ...state, items: products };
  } else if (action.type == "CATEGORY_UPDATE") {
    let categories = action.payload;
    return { ...state, categories: categories };
  }
  return state;
}
