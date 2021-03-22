import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import preparePath from "./../PreparePath";

export const Categories = () => {
  const storeCategories = useSelector((state) => state.productState.categories);
  const [categories, setCategories] = useState(
    storeCategories ? storeCategories : []
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (!storeCategories || (storeCategories && storeCategories.length == 0)) {
      axios
        .get(`${process.env.REACT_APP_API_URL}/categories/15/1`)
        .then(({ data }) => {
          var pCategories = data.payload;
          console.log("Success ", pCategories);
          setCategories(pCategories);
          dispatch({ type: "CATEGORY_UPDATE", payload: pCategories });
        })
        .catch((err) => {
          console.log("error ", err);
        });
    }
  }, []);
  return (
    <>
      <h1>Categories</h1>
      <ul>
        {categories.map((category) => (
          <div key={category.id}>
            {/* route /products/:category */}
            <a href={`${preparePath("products/" + category.id)}`}>
              <div>
                {category.id} {category.name}
              </div>
              <div>
                <img
                  style={{ height: "100px", width: "100px" }}
                  src={category.imageurl}
                />
              </div>
            </a>
          </div>
        ))}
      </ul>
    </>
  );
};
