import React, { Component } from 'react';
import './Home.css';
import Menu from '../../Components/Menu/Menu';
import Banner from '../../Components/Banner/Banner';
import Sobre from '../../Components//Sobre/Sobre';
import Eventos from '../../Components/Eventos/Eventos';
import Contato from '../../Components/Contato/Contato';
import Footer from '../../Components/Footer/Footer';
import Comunidade from '../../Components/Comunidade/Comunidade';
import Carrossel from '../../Components/Carrossel/Carrossel';

class Home extends Component {
  render() {
    return (
        <div className="Home">
            <Menu />
            <Banner />
            <Sobre />
            <div className="grade"></div>
            <Eventos />
            <div className="grade"></div>
            <Comunidade />
            <div className="grade"></div>
            <Contato />
            <Footer />
            {/* <Carrossel /> */}
        </div>    
    );
  }
}

export default Home;