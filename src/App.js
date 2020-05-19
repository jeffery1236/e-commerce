import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component'

import "./App.css";

const Hats = () => <h1>Hello Hats</h1>;

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>  {/* Switch ensures only 1 route is matched */}
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
