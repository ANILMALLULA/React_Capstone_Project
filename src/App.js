import "./App.css";
import { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Spinner } from "react-bootstrap";
import Navbar from "./components/Navbar/NavBar";
import Home from "./components/Home";

import { Provider } from "react-redux";
import store from "./store";

const NotFound = lazy(() => import("./components/NotFound"));

const ProductList = lazy(() => import("./components/products/ProductList"));

const ProductDetails = lazy(() =>
  import("./components/products/ProductDetails")
);

const ProductCreate = lazy(() => import("./components/products/ProductCreate"));

const ProductUpdate = lazy(() => import("./components/products/ProductUpdate"));

const ProductSearch = lazy(() => import("./components/products/ProductSearch"));

const Login = lazy(() => import("./components/user/Login"));

const Logout = lazy(() => import("./components/user/Logout"));

const Charts = lazy(() => import("./components/products/charts/Charts"));

const Registration = lazy(() => import("./components/user/Registration"));

const User = lazy(() => import("./components/user/User"));

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Suspense
          fallback={
            <h5 style={{ textAlign: "center", margin: "10% 0" }}>
              Your are experiencing slow network connection. Please be patient
              <div
                style={{
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  margin: "10% 0",
                }}
              >
                <Spinner
                  animation='border'
                  style={{ width: "50px", height: "50px" }}
                />
              </div>
            </h5>
          }
        >
          <Switch>
            <Route exact path='/'>
              <Redirect to='/home' />
            </Route>
            <Route exact path='/home' component={Home} />
            <Route exact path='/list'>
              <ProductList />
            </Route>
            <Route exact path='/details/:id'>
              <ProductDetails />
            </Route>
            <Route exact path='/create'>
              <ProductCreate />
            </Route>
            <Route exact path='/update/:id'>
              <ProductUpdate />
            </Route>
            <Route exact path='/login'>
              <Login />
            </Route>
            <Route exact path='/search'>
              <ProductSearch />
            </Route>
            <Route exact path='/charts'>
              <Charts />
            </Route>
            <Route exact path='/register'>
              <Registration />
            </Route>
            <Route exact path='/profile'>
              <User />
            </Route>
            <Route exact path='/logout'>
              <Logout />
            </Route>
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </Router>
    </Provider>
  );
}

export default App;
