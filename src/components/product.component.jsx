import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import "./product.component.css";
export const Product = ({ product }) => {
  const storeProducts = useSelector((state) => state.productState.items);
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
            backgroundImage: `url(${product.imageurl})`,
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
              var data = {
                productid: product.id,
              };
              console.log("Added product to Cart ", data);
              axios
                .post(
                  `${process.env.REACT_APP_API_URL}/cart/add`,
                  JSON.stringify(data)
                )
                .then(({ data }) => {
                  var pProduct = data.payload.product;
                  console.log("Data came after ADD_TO_CART ", data);
                  console.log("productid ", pProduct.id);
                  const cProduct = storeProducts.find(
                    (x) => x.id == pProduct.id
                  );
                  if (cProduct) {
                    dispatch({
                      type: "ADD_TO_CART",
                      payload: {
                        product: {
                          id: cProduct.id,
                          name: cProduct.name,
                          unitprice: cProduct.unitprice,
                          quantity: cProduct.quantity,
                        },
                      },
                    });
                  }
                })
                .catch((err) => {});
            }}
          >
            +
          </button>
          <input type="text" />
          <button
            className="btn btn-minus"
            onClick={() => {
              var data = {
                productid: product.id,
              };
              axios
                .post(
                  `${process.env.REACT_APP_API_URL}/cart/remove`,
                  JSON.stringify(data)
                )
                .then(({ data }) => {
                  console.log("Data came after REMOVE_FROM_CART ", data);
                  var pProduct = data.payload.product;
                  console.log("productid ", pProduct.id);
                  const cProduct = storeProducts.find(
                    (x) => x.id == pProduct.id
                  );
                  if (cProduct) {
                    dispatch({
                      type: "REMOVE_FROM_CART",
                      payload: {
                        product: {
                          id: cProduct.id,
                          name: cProduct.name,
                          unitprice: cProduct.unitprice,
                          quantity: cProduct.quantity,
                        },
                      },
                    });
                  }
                })
                .catch((err) => {});
            }}
          >
            -
          </button>
        </div>
      </div>
    </>
  );
};
