import { useState } from "react";
import { Link } from "react-router-dom";

export const Products = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Apple" },
    { id: 2, name: "Orange" },
    { id: 3, name: "Pomegranate" },
    { id: 4, name: "Banana" },
    { id: 5, name: "Banana" },
  ]);
  return (
    <div
      className="productsContainer"
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "flex-start",
      }}
    >
      {products.map((x) => (
        <div key={x.id} className="product" style={{ margin: "5px" }}>
          <a
            style={{
              display: "block",
              textAlign: "center",
              textDecoration: "none",
              padding: "5px",
              color: "black",
            }}
            href={`/products/${x.id}`}
          >
            <div className="productImage">
              <img src="https://picsum.photos/200?grayscale" />
            </div>
          </a>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div>{x.name}</div>
            <button
              id={`btn-${x.id}`}
              onClick={(e) => {
                console.log("Add to Card ", e.target.getAttribute("id"));
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
