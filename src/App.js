import './App.css';
import React from "react";
import { Route, Switch } from 'react-router-dom'
import IndexPage from './pages/index'
import Products from './pages/products'
import NotFound from './pages/NotFound'
import Aboutus from './pages/aboutus';
import Product from './pages/product';
import Contactus from './pages/contactus';
import Cart from './pages/cart';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/aboutus" component={Aboutus} />
        <Route exact path="/product" component={Product} />
        <Route exact path="/contactus" component={Contactus} />
        <Route exact path="/cart" component={Cart} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
