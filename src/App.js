import React, { useEffect, useState } from 'react';
import './App.css';
import { CSSTransition } from 'react-transition-group';
import Header from './components/Header';
import Navigation from './components/Nav';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import Menu from './components/Menu';
import Locations from './components/Locations';
import Contact from './components/Contact';
import Memberships from './components/Memberships';
import Shop from './components/Shop';
import Success from './components/Success';
import Cancel from './components/Cancel';
import Cart from './components/Cart';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const [cart, setCart] = useState([]);
  const [toast, setToast] = useState(false);

  const toggleToast = () => setToast(!toast);

  const updateCart = () => {
    let cartArray = [];
    let keys = Object.keys(localStorage);
    for (let key of keys) {
      const quantity = localStorage.getItem(key);
      cartArray.push({
        price: key,
        quantity: quantity,
      });
    }
    setCart(cartArray);
  };

  const removeFromCart = priceId => {
    localStorage.removeItem(priceId);
    for (let i = 0; i < cart.length; i++) {
      const itemPrice = cart[i].price;
      if (itemPrice === priceId) {
        cart.splice(i, 1);
      }
    }
    updateCart();
  };

  const addToStorage = (priceId, quantity) => {
    window.localStorage.setItem(priceId, quantity);
  };

  const getFromStorage = priceId => {
    return window.localStorage.getItem(priceId);
  };

  const addItemToStorage = (priceId, quantity) => {
    if (getFromStorage(priceId)) {
      const newQuantity =
        parseInt(quantity) + parseInt(getFromStorage(priceId));
      addToStorage(priceId, newQuantity);
    } else {
      addToStorage(priceId, quantity);
    }
  };

  const addToCart = (priceId, itemCode) => {
    const quantity = document.getElementById(itemCode).value;
    if (quantity === 'Quantity') {
      alert('Select a quantity to add to cart.');
    } else {
      addItemToStorage(priceId, quantity);
    }
    updateCart();
    toggleToast();
  };

  useEffect(() => {
    updateCart();
  }, []);

  async function initiateCheckout() {
    const itemData = {
      data: cart,
    };
    const res = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/create-checkout-session`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(itemData),
      }
    );
    const body = await res.json();
    window.location.href = body.url;
  }

  const routes = [
    { path: '/about', name: 'About', Component: About, props: {} },
    { path: '/menu', name: 'Menu', Component: Menu, props: {} },
    {
      path: '/memberships',
      name: 'Memberships',
      Component: Memberships,
      props: {},
    },
    {
      path: '/shop',
      name: 'Shop',
      Component: Shop,
      props: {
        updateCart,
        initiateCheckout,
        addToStorage,
        getFromStorage,
        addItemToStorage,
        addToCart,
        toggleToast,
        toast,
      },
    },
    { path: '/locations', name: 'Locations', Component: Locations, props: {} },
    { path: '/contact', name: 'Contact', Component: Contact, props: {} },
    {
      path: '/success',
      name: 'Success',
      Component: Success,
      props: {
        updateCart,
      },
    },
    { path: '/cancel', name: 'Cancel', Component: Cancel, props: {} },
    {
      path: '/cart',
      name: 'Cart',
      Component: Cart,
      props: {
        cart,
        updateCart,
        initiateCheckout,
        removeFromCart,
        addToCart,
        addItemToStorage,
        addToStorage,
        getFromStorage,
      },
    },
    { path: '/', name: 'Home', Component: Home, props: {} },
  ];

  return (
    <div className="App d-flex flex-column min-vh-100">
      <Router>
        <div className="flex-grow-1">
          <Header
            cart={cart}
            updateCart={updateCart}
            initiateCheckout={initiateCheckout}
          />
          <Navigation />
          {/* {routes.map(({ path, Component, props }) => (
            <Route key={path} exact path={path}>
              <CSSTransition
                in
                timeout={300}
                classNames="page"
                unmountOnExit>
                <div className="page">
                  <Component {...props} />
                </div>
              </CSSTransition>
            </Route>
          ))} */}
          <CSSTransition classNames="page" timeout={300}>
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/menu">
                <Menu />
              </Route>
              <Route path="/memberships">
                <Memberships />
              </Route>
              <Route path="/shop">
                <Shop
                  updateCart={updateCart}
                  initiateCheckout={initiateCheckout}
                  addToStorage={addToStorage}
                  getFromStorage={getFromStorage}
                  addItemToStorage={addItemToStorage}
                  addToCart={addToCart}
                  toggleToast={toggleToast}
                  toast={toast}
                />
              </Route>
              <Route path="/locations">
                <Locations />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/success">
                <Success updateCart={updateCart} />
              </Route>
              <Route path="/cancel">
                <Cancel />
              </Route>
              <Route path="/cart">
                <Cart
                  cart={cart}
                  updateCart={updateCart}
                  initiateCheckout={initiateCheckout}
                  removeFromCart={removeFromCart}
                  addToCart={addToCart}
                  addItemToStorage={addItemToStorage}
                  addToStorage={addToStorage}
                  getFromStorage={getFromStorage}
                />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
            </Switch>
          </CSSTransition>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
