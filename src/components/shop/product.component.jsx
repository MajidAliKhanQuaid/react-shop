import { useDispatch } from "react-redux";
import "./../shop/product.component.css";
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
        <div className="productImage"></div>
        <div className="productName">{product.name}</div>
        <div className="addToCartBox">
          <button
            className="btn btn-add"
            onClick={() => {
              console.log("Added product to Cart");
              dispatch({ type: "ITEMS_COUNT", payload: { itemsCount: 20 } });
            }}
          >
            +
          </button>
          <input type="text" />
          <button
            className="btn btn-minus"
            onClick={() => {
              console.log("Removed product from Cart");
              dispatch({ type: "ITEMS_COUNT", payload: { itemsCount: 10 } });
            }}
          >
            -
          </button>
        </div>
      </div>
    </>
  );
};
