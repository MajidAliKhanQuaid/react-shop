import "./main.css";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import { HomePage } from "../../components/nasa/home.page";
import { store } from "../../redux/store";
export const NasaApp = () => {
  return (
    <Provider store={store}>
      <h1>Nasa App !!</h1>
      <div className="navigation">
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/" component={HomePage} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
};
