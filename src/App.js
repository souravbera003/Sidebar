import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Products from './pages/Products';
import About from './pages/About';
import Support from './pages/Support';
import Orders from './pages/Orders';
import Wishlist from './pages/Wishlist';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/profile' component={Profile} />
          <Route path='/products' component={Products} />
          <Route path='/orders' component={Orders} />
          <Route path='/wishlist' component={Wishlist} />
          <Route path='/support' component={Support} />
          <Route path='/about' component={About} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
