import React, { Component } from 'react';
import '../Menu/Menu.css';

class Menu extends Component{
    render (){
        return(
            <header>
                <img src={require('../../Images/itbranco.png')} alt="logo"/>
                        
                <nav> 
                    <a href="">Home</a>
                    <a href="">Sobre</a>
                    <a href="">Eventos</a>
                    <a href="">Contato</a>
                    <a id="login" onClick={this.props.alternarModal}>Deslogar+</a>
                </nav>
            </header>
        );
    }
}

export default Menu;