import "./App.css";
import React from "react";
import Header from "./header";
import Home from "./home";
import Checkout from "./checkout";
import Login from "./login";
import OrderHistory from "./orderhistory";
import Register from "./register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/orderhistory">
            <Header />
            <OrderHistory />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
