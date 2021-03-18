import { useEffect, useState } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import "./cart.component.css";

export function Cart() {
  const products = useSelector((x) => x.cartState.products);
  return (
    <>
      <div className="cart">
        <div className="box">
          <div>Count</div>
          <div></div>
          <div>{products.length}</div>
        </div>
        <div className="box">
          <div>Total Price</div>
          <div></div>
          <div>
            {products.reduce(
              (a, b) =>
                Math.round(
                  a + parseFloat(b.unitprice) * parseFloat(b.quantity)
                ),
              0
            )}
          </div>
        </div>
        <div className="box box-slide">Products</div>

        <div className="box box-items box-header">
          <div>NAME</div>
          <div>U/PRICE</div>
          <div>QUANTITY</div>
        </div>
        {products.map((x) => (
          <div key={x.name} className="box box-items">
            <div>{x.name}</div>
            <div>{x.unitprice}</div>
            <div>{x.quantity}</div>
          </div>
        ))}
      </div>
    </>
  );
}
