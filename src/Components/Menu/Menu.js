import React, { Component } from 'react';
import './Menu.css';

class Menu extends Component{
    render (){
        return(
            <header>
                <img src={require('../../Images/itbranco.png')} alt="logo"/>
                        
                <nav> 
                    <a href="">HOME</a>
                    <a href="">SOBRE</a>
                    <a href="">EVENTOS</a>
                    <a href="">Contato</a>
                    <a id="login" onClick={this.props.alternarModal}>Login+</a>
                </nav>
            </header>
        );
    }
}

export default Menu;