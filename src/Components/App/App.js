import React, { Component } from 'react';
import './App.css';
import Home from '../../Pages/Home/Home';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';
import Agenda from '../../Pages/Agenda/Agenda';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Menu />
        {/* <Home /> */}
        <Agenda />
        <Footer />
      </div>
    );
  }
}

export default App;