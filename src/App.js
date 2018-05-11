import React, { Component } from 'react';
import Banner from './Componentes/Banner';
import Sobre from './Componentes/Sobre';
import Eventos from './Componentes/Eventos';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">

          <img id="it" src="itbranco.png"/>
         
            <nav> 
            <a href="">HOME</a>
            <a href="">SOBRE</a>
            <a href="">EVENTOS</a>
            <a href="">AGENDA</a>
            <a href="">CONTATO</a>
            </nav>
      
        </header>
        <Banner/>
        <Sobre/>
        <Eventos/>    

      </div>
    );
  }
}

export default App;
