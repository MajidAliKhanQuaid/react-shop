import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { Product } from "./../shop/product.component";
export const ProductsPage = () => {
  const { category } = useParams();
  const products = [
    { id: 1, name: "apple" },
    { id: 2, name: "orange" },
    { id: 3, name: "banana" },
    { id: 4, name: "parcley" },
    { id: 5, name: "pomegranate" },
    { id: 6, name: "box" },
    { id: 7, name: "kale" },
  ];
  return (
    <>
      <h1>
        Category <span style={{ color: "red" }}>{category}</span> !
      </h1>
      <div className="products">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};
