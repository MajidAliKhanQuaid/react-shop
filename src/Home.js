import { useEffect, useState } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { Cart } from "./Cart";
export function Home() {
  return (
    <>
      <h1>Home *</h1>
      <Cart />
    </>
  );
}
