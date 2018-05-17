import React, { Component } from 'react';
import './Home.css';
import Banner from '../../Components/Banner/Banner';
import Sobre from '../../Components//Sobre/Sobre';
import Eventos from '../../Components/Eventos/Eventos';
import Comunidade from '../../Components/Comunidade/Comunidade';
import Contato from '../../Components/Contato/Contato';
import Menu from '../../Components/Menu/Menu';
import Modal from '../../Components/Modal/Modal';

class Home extends Component {
  componentWillMount = () => {
    this.setState({ modalAtivo: false });
  }

  alternarModal = () => {
    let ativo = !this.state.modalAtivo;

    this.setState({ modalAtivo: ativo });
  }

  render() {
    return (
        <div className="Home">
            <Menu alternarModal={this.alternarModal}/>
            <Modal ativo={this.state.modalAtivo}/>
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