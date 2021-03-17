import { useEffect, useState } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";

export function Cart() {
  const itemsCount = useSelector((x) => x.shop.itemsCount);
  return (
    <>
      <h1>There're {itemsCount} items in the cart</h1>
    </>
  );
}
