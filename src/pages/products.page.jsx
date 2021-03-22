import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Product } from "../components/product.component";
export const ProductsPage = () => {
  const storeProducts = useSelector((state) => state.productState.items);
  const [products, setProducts] = useState(storeProducts ? storeProducts : []);
  const dispatch = useDispatch();
  let { category } = useParams();
  // console.log(params);
  useEffect(() => {
    // category/pageSize/pageNo
    if (!category) {
      category = 0;
    }
    console.log("Store Products before ", storeProducts);
    if (!storeProducts || (storeProducts && storeProducts.length == 0)) {
      axios
        .get(`${process.env.REACT_APP_API_URL}/products/${category}/1/1`)
        .then(({ data }) => {
          var pProducts = data.payload;
          console.log("Success ", pProducts);
          setProducts(pProducts);
          dispatch({ type: "PRODUCTS_UPDATE", payload: pProducts });
        })
        .catch((err) => {
          console.log("error ", err);
        });
    }
  }, []);
  // const products = [
  //   {
  //     id: 1,
  //     name: "Apple",
  //     url:
  //       "https://images.unsplash.com/photo-1593359797688-c51a69ecc2d5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=763&q=80",
  //     unitprice: 10,
  //   },
  //   {
  //     id: 2,
  //     name: "Orange",
  //     url:
  //       "https://images.unsplash.com/photo-1547514701-418e31cbb328?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  //     unitprice: 61.4,
  //   },
  //   {
  //     id: 3,
  //     name: "Cherry",
  //     url:
  //       "https://images.unsplash.com/photo-1528821128474-27f963b062bf?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80",
  //     unitprice: 1.4,
  //   },
  //   {
  //     id: 4,
  //     name: "Parcley",
  //     url:
  //       "https://images.unsplash.com/photo-1590759485418-90509afec818?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  //     unitprice: 10.4,
  //   },
  //   {
  //     id: 5,
  //     name: "Pomegranate",
  //     url:
  //       "https://images.unsplash.com/photo-1580636521086-7b0c742dd567?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  //     unitprice: 11.8,
  //   },
  //   {
  //     id: 6,
  //     name: "Banana",
  //     url:
  //       "https://images.unsplash.com/photo-1554225198-3968268e2cf6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=751&q=80",
  //     unitprice: 0.4,
  //   },
  //   {
  //     id: 7,
  //     name: "Kale",
  //     url:
  //       "https://images.unsplash.com/photo-1539207107274-c576d0d5b375?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  //     unitprice: 55.4,
  //   },
  //   {
  //     id: 8,
  //     name: "Grapes",
  //     url:
  //       "https://images.unsplash.com/photo-1575278986957-45c2c26e9b2d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  //     unitprice: 10,
  //   },
  // ];
  return (
    <>
      <div className="products">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};
