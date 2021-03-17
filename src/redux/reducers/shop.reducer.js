export default function shopReducer(state = {}, action) {
  console.log("shop.reducer  [state]", state, " [action] ", action);
  if (action.type === "ITEMS_COUNT") {
    const { payload } = action;
    console.log("--> shop.reducer [payload] ", payload);
    return { ...state, itemsCount: payload.itemsCount };
  }
  return state;
}
