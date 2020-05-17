import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from './pages/shop/shop.component';

const Hats = () => <h1>Hello Hats</h1>;

function App() {
  return (
    <div className="App">
      <Switch>  {/* Switch ensures only 1 route is matched */}
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
