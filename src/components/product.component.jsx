import { useDispatch } from "react-redux";
import "./product.component.css";
export const Product = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="product glass">
        <div className="overlay">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore illum
          autem quas repellendus aperiam quisquam praesentium, ipsam ex
          reiciendis ad vitae quod? Nihil animi eos dolorum exercitationem
          voluptatibus minus sint!
        </div>
        <div
          className="productImage"
          style={{
            backgroundImage: `url(${product.url})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        ></div>
        <div className="productName">{product.name}</div>
        <div className="addToCartBox">
          <button
            className="btn btn-add"
            onClick={() => {
              console.log("Added product to Cart");
              dispatch({ type: "ADD_TO_CART", payload: { product: product } });
            }}
          >
            +
          </button>
          <input type="text" />
          <button
            className="btn btn-minus"
            onClick={() => {
              console.log("Removed product from Cart");
              dispatch({
                type: "REMOVE_FROM_CART",
                payload: { product: product },
              });
            }}
          >
            -
          </button>
        </div>
      </div>
    </>
  );
};
