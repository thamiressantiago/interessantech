import React, { Component } from 'react';
import './Home.css';
import Banner from '../../Components/Banner/Banner';
import Sobre from '../../Components//Sobre/Sobre';
import Eventos from '../../Components/Eventos/Eventos';
import Comunidade from '../../Components/Comunidade/Comunidade';
import Contato from '../../Components/Contato/Contato';

class Home extends Component {
  render() {
    return (
        <div className="Home">
            <Banner />
            <Sobre />
            <div className="grade"></div>
            <Eventos />
            <div className="grade"></div>
            <Comunidade />
            <div className="grade"></div>
            <Contato />
        </div>    
    );
  }
}

export default Home;