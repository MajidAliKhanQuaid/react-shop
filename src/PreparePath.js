export default function preparePath(originalRoute) {
  // e.g. originalRoute /categories
  // maps to PREFIX/categories i.e. majidalikhanquaid.github.io/react-shop/categories
  if (!originalRoute) originalRoute = "";
  return `/${
    process.env.REACT_APP_BASE_URL ? process.env.REACT_APP_BASE_URL + "/" : ""
  }${originalRoute}`;
}
