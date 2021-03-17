import { useEffect, useState } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";

export function Users() {
  const _globalCount = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const [count, setCount] = useState(_globalCount ? _globalCount : 0);
  useEffect(() => {}, []);
  return (
    <>
      <h1>Count is : {count}</h1>
      <div>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Add To Count
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            setCount(count - 1);
          }}
        >
          Remove From Count
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            dispatch({ type: "update_count", data: count });
          }}
        >
          Changes Finalized
        </button>
      </div>
    </>
  );
}
