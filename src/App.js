import React from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Nav';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
