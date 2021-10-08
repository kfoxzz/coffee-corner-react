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

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Memberships />
      <Footer />
    </div>
  );
}

export default App;
