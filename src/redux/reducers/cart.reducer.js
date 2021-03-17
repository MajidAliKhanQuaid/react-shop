const initialState = { products: [] };
export default function cartReducer(state = initialState, action) {
  console.log("cart.reducer  [state]", state, " [action] ", action);
  if (action.type == "ADD_TO_CART") {
    const { product } = action.payload;
    // let { products } = state;
    let products = [...state.products];

    console.log("Products Before", products);
    if (!products) {
      products = [];
    }
    console.log("Products After", products);

    let eProduct = products.find((x) => x.id == product.id);
    if (eProduct) {
      console.log("Product already existed so added a new quantity");
      eProduct.quantity = eProduct.quantity += 1;
    } else {
      console.log("New product was pushed");
      products.push({
        id: product.id,
        name: product.name,
        quantity: 1,
        unitprice: product.unitprice,
      });
    }

    return { ...state, products: products };
  } else if (action.type == "REMOVE_FROM_CART") {
    const { product } = action.payload;
    // let { products } = state;
    let products = [...state.products];
    if (!products) {
      products = [];
    }

    let eProduct = products.find((x) => x.id == product.id);
    if (eProduct) {
      if (eProduct.quantity > 0) {
        eProduct.quantity = eProduct.quantity -= 1;
      }
      // to ensure, we have no product with 0 quantity
      products = products.filter((x) => x.quantity > 0);
    } else {
      console.log(
        `cart.reducer -> REMOVE_FROM_CART | Product never existed '${product.name}' `
      );
    }

    return { ...state, products: products };
  }
  return state;
}
