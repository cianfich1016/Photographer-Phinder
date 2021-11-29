import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/NavBar";
import HomePage from "./components/home";
import Login from "./components/LoginForm";
import Footer from "./components/Footer";
import SearchResults from "./components/SearchResults";
import SignUp from "./components/SignUp";
import Profile from "./pages/Profile";
import Products from "./components/Products/Products.js";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/CheckoutPage/Checkout";
import { commerce } from "./lib/commerce";

function App() {
  // const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMess, setErrorMess] = useState("");
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    const { data: products } = await commerce.products.list();
    const { data: categoriesData } = await commerce.categories.list();
    const productsPerCat = categoriesData.reduce((acc, category) => {
      return [
        ...acc,
        {
          ...category,
          productsData: products.filter((product) =>
            product.categories.find((cat) => cat.id === category.id)
          ),
        },
      ];
    }, []);
    setCategories(productsPerCat);
    console.log(productsPerCat);
  };

  const fetchCart = async () => {
    const data = await commerce.cart.retrieve();
    setCart(data);
    console.log(data);
  };

  const handleAddToCart = async (product_id, quantity) => {
    console.log(product_id);
    const item = await commerce.cart.add(product_id, quantity);
    setCart(item.cart);
    // commerce.cart.contents().then((items) => console.log(items));
  };
  const handleUpdateCartQty = async (productId, quantity) => {
    const data = await commerce.cart.update(productId, { quantity });
    setCart(data.cart);
  };
  const handleRemoveFromCart = async (productId) => {
    const data = await commerce.cart.remove(productId);
    setCart(data.cart);
  };
  const handleEmptyCart = async () => {
    const data = await commerce.cart.empty();
    setCart(data.cart);
  };
  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };
  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );
      setOrder(incomingOrder);

      refreshCart();
    } catch (error) {
      setErrorMess(error.data.error.message);
    }
  };
  useEffect(() => {
    // fetchProducts();
    fetchCart();
    fetchCategories();
  }, []);
  return (
    <>
      <Router>
        <Navbar totalItems={cart.total_items} />
        <Switch>
          <Route exact path="/">
            <HomePage categories={categories} onAddToCart={handleAddToCart} />
          </Route>
          <Route path="/login" component={Login} />
          <Route path="/search" component={SearchResults} />
          <Route path="/signup" component={SignUp} />
          <Route path="/profile" component={Profile} />
          <Route exact path="/products">
            <Products categories={categories} onAddToCart={handleAddToCart} />
          </Route>
          <Route exact path="/cart">
            <Cart
              cart={cart}
              onUpdateCartQty={handleUpdateCartQty}
              onRemoveFromCart={handleRemoveFromCart}
              onEmptyCart={handleEmptyCart}
            />
          </Route>
          <Route exact path="/checkout">
            <Checkout
              cart={cart}
              order={order}
              onCaptureCheckout={handleCaptureCheckout}
              error={errorMess}
            />
          </Route>
          <Route render={() => <h1 className="display-2">Wrong page!</h1>} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
