import React from 'react';
import './App.css';
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
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App" class="d-flex flex-column min-vh-100">
      <Router>
        <div className="flex-grow-1">
            <Header />
            <Navigation />

            <Switch>
              <Route path="/home">
                <Home />
              </Route>
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
                <Shop />
              </Route>
              <Route path="/locations">
                <Locations />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
            </Switch>
          </div>

          <Footer />
      </Router>
    </div>
  );
}

export default App;
