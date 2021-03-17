import { useParams } from "react-router";

export const Product = () => {
  let { id } = useParams();
  return (
    <>
      <h1>Product Page {id}</h1>
      <div>
        <img src="https://picsum.photos/200?grayscale" />
      </div>
    </>
  );
};
