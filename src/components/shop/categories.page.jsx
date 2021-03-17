import { useState } from "react";

export const Categories = () => {
  const categories = ["", "", "", ""];
  return (
    <>
      <h1>Categories</h1>
      <ul>
        {categories.map((a, b) => (
          <li className={a}>{b}</li>
        ))}
      </ul>
    </>
  );
};
