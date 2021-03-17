import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { Product } from "./product.component";
export const ProductsPage = () => {
  // const { category } = useParams();
  const products = [
    { id: 1, name: "apple", unitprice: 10 },
    { id: 2, name: "orange", unitprice: 61.4 },
    { id: 3, name: "banana", unitprice: 1.4 },
    { id: 4, name: "parcley", unitprice: 10.4 },
    { id: 5, name: "pomegranate", unitprice: 11.8 },
    { id: 6, name: "box", unitprice: 0.4 },
    { id: 7, name: "kale", unitprice: 55.4 },
  ];
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
