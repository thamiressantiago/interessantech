import React, { Component } from 'react';
import './Agenda.css';
import Hexagono from '../../Components/Hexagono/Hexagono';
import agenda1 from '../../Images/evento1.jpg';
import Menu_ from '../../Components/Menu_/Menu_';

class Agenda extends Component {
  render() {
    return (
        <section className="Agenda">
            <Menu_ />
            <h2>Agenda</h2>
            <hr /> <hr />
            
            <div className="calendario">
                <div className="data">
                    <p className="dia">_16</p>
                    <p className="mes">ago</p>
                </div>
                <div className="hexa">
                    <Hexagono imagem={agenda1} color={'#F7941E'} />
                </div>
                <div className="info">
                    <p className="titulo">Big Festival</p>
                    <p className="info_">BIG Dev:  trilha de palestras orientadas para as disciplinas envolvidas no desenvolvimento de jogos, como arte, programação, game design, usabilidade, produção, entre outros.</p>
                    <a href="http://www.bigfestival.com.br/" className="site">Acesse o site aqui!</a>
                </div>
            </div>
            
            <div className="grade"></div>
            
            <div className="calendario">
                <div className="data">
                    <p className="dia">-16</p>
                    <p className="mes">ago</p>
                </div>
                <div className="hexa">
                    <Hexagono imagem={agenda1} color={'#F7941E'} />
                </div>
                <div className="info">
                    <p className="titulo">Big Festival</p>
                    <p className="info_">BIG Dev:  trilha de palestras orientadas para as disciplinas envolvidas no desenvolvimento de jogos, como arte, programação, game design, usabilidade, produção, entre outros.</p>
                    <a href="http://www.bigfestival.com.br/" className="site">Acesse o site aqui!</a>
                </div>
            </div>

            <div className="grade"></div>

            <div className="calendario">
                <div className="data">
                    <p className="dia">-16</p>
                    <p className="mes">ago</p>
                </div>
                <div className="hexa">
                    <Hexagono imagem={agenda1} color={'#F7941E'} />
                </div>
                <div className="info">
                    <p className="titulo">Big Festival</p>
                    <p className="info_">BIG Dev:  trilha de palestras orientadas para as disciplinas envolvidas no desenvolvimento de jogos, como arte, programação, game design, usabilidade, produção, entre outros.</p>
                    <a href="http://www.bigfestival.com.br/" className="site">Acesse o site aqui!</a>
                </div>
            </div>

            <div className="grade"></div>

                        <div className="calendario">
                <div className="data">
                    <p className="dia">-16</p>
                    <p className="mes">ago</p>
                </div>
                <div className="hexa">
                    <Hexagono imagem={agenda1} color={'#F7941E'} />
                </div>
                <div className="info">
                    <p className="titulo">Big Festival</p>
                    <p className="info_">BIG Dev:  trilha de palestras orientadas para as disciplinas envolvidas no desenvolvimento de jogos, como arte, programação, game design, usabilidade, produção, entre outros.</p>
                    <a href="http://www.bigfestival.com.br/" className="site">Acesse o site aqui!</a>
                </div>
            </div>
            
            <div className="grade"></div>

            <div className="calendario">
                <div className="data">
                    <p className="dia">-16</p>
                    <p className="mes">ago</p>
                </div>
                <div className="hexa">
                    <Hexagono imagem={agenda1} color={'#F7941E'} />
                </div>
                <div className="info">
                    <p className="titulo">Big Festival</p>
                    <p className="info_">BIG Dev:  trilha de palestras orientadas para as disciplinas envolvidas no desenvolvimento de jogos, como arte, programação, game design, usabilidade, produção, entre outros.</p>
                    <a href="http://www.bigfestival.com.br/" className="site">Acesse o site aqui!</a>
                </div>
            </div>
        </section>  
    );
  }
}

export default Agenda;