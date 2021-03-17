import { useSelector } from "react-redux";

export const Cart = () => {
  let cartItems = useSelector((x) => x.cartItems);
  if (!cartItems) {
    cartItems = [];
  }
  return (
    <>
      <div>Cart Items</div>
      <ul>
        {cartItems.map((cartItem) => (
          <li>{cartItem.name}</li>
        ))}
      </ul>
    </>
  );
};
