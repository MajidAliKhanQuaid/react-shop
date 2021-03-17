import { useEffect, useState } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";

export function Cart() {
  const [cartItems, setCartItems] = useState([
    { name: "Apple", price: 10 },
    { name: "Orange", price: 20 },
  ]);
  return (
    <>
      <ul>
        {cartItems.map((x) => (
          <li>{x.name}</li>
        ))}
      </ul>
    </>
  );
}
