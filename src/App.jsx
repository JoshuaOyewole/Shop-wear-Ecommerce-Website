
import React from 'react';
import Product from "./pages/Product";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import MadeToMeasure from './pages/MadeToMeasure'
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Navbar from "./components/NewNav";
import Footer from "./components/NewFooter";
import ContactUs from "./pages/ContactUs";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <>
     
      <Router>
         <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products/:category">
            <ProductList />
          </Route>
          <Route path="/made-to-measure/scrubsuit">
            <MadeToMeasure />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/product/:id">
            <Product />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/success">
            <Success />
          </Route>
          <Route path="/contact-us">
            <ContactUs />
          </Route>
          <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
          <Route path="/register">
            {user ? <Redirect to="/" /> : <Register />}
          </Route>
        </Switch> 
         <Footer />
      </Router>
    
    </>
  );
};

export default App;
