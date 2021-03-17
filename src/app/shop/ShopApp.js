import "./main.css";
import { Provider, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import { HomePage } from "../../components/shop/home.page";
import { ProductsPage } from "../../components/shop/products.page";
import { store } from "../../redux/store";
import { Categories } from "../../components/shop/categories.page";
import { Cart } from "../../components/shop/cart.component";
function ShopApp() {
  const itemsCount = useSelector((x) => x.shop.itemsCount);
  const routes = [
    { id: 1, label: "Fresh", category: "fresh" },
    { id: 2, label: "Crockery", category: "crockery" },
    { id: 3, label: "Shoes", category: "shoes" },
    { id: 4, label: "Furniture", category: "furniture" },
  ];
  return (
    <Provider store={store}>
      <>
        <h1>Number of Items : {itemsCount}</h1>
        <Router>
          <div className="app">
            <h3>Shop App !!</h3>
            <nav>
              <ul className="menu">
                <li className="menu-item">
                  <Link to="/">Home</Link>
                </li>
                {/* <li className="menu-item">
                  <Link to="/practice">Practice</Link>
                </li> */}

                <li className="menu-item dropdown-container">
                  Categories
                  <ul className="dropdown">
                    {routes.map((x) => (
                      <li>
                        <Link key={x.id} to={`/products/${x.category}`}>
                          {x.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
          <Cart />
          <Switch>
            <Route exact path="/products" component={Categories} />
            <Route path="/products/:category" component={ProductsPage} />
            <Route exact path="/" component={HomePage} />
            <Route
              path="*"
              component={() => {
                <h1>Not Found !!</h1>;
              }}
            />
          </Switch>
        </Router>
      </>
    </Provider>
  );
}

export default ShopApp;
