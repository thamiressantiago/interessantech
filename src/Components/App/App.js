import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';
import Home from '../../Pages/Home/Home';
import Footer from '../Footer/Footer';
import Agenda from '../../Pages/Agenda/Agenda';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Route path="/" exact component={ () => <Home /> } />
        <Route path="/agenda" exact component={ () => <Agenda /> } />
        <Footer/>
      </div>
    );
  }
}

export default App;