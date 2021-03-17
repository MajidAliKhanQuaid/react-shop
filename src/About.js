import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export function About() {
  const _globalUser = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [user, setUser] = useState(_globalUser ? _globalUser : {});
  useEffect(() => {
    if (!user.userId) {
      fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setUser(json);
          dispatch({ type: "user_updated", data: json });
        });
    }
  }, []);
  return <h1>Welcome '{user.title}'</h1>;
}
