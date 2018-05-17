import React, { Component } from 'react';
import './Agenda.css';
import Hexagono from '../../Components/Hexagono/Hexagono';
import Menu_ from '../../Components/Menu_/Menu_';
import agenda1 from '../../Images/ciab.png';
import agenda2 from '../../Images/big.jpeg';
import agenda3 from '../../Images/frontinsampa.png';
import agenda4 from '../../Images/futurecom.png';
import agenda5 from '../../Images/roadsec.png';

class Agenda extends Component {
  render() {
    return (
        <section className="Agenda">
            <Menu_ />
            <h2>Agenda Pessoal</h2>
            <hr /> <hr />

            <div className="calendario">
                <div className="data">
                    <p className="dia">_12</p>
                    <p className="mes">jun</p>
                </div>
                <div className="hexa">
                    <Hexagono imagem={agenda1} color={'#233E6F'} />
                </div>
                <div className="info">
                    <p className="titulo">CIAB FEBRABAN</p>
                    <p className="info_">O maior congresso de tecnologia da informação para o setor financeiro debaterá no CIAB 2018 o tema Inteligência Exponencial.</p>
                    <a href="http://www.bigfestival.com.br/" className="site">Acesse o site aqui!</a>
                </div>
            </div>
            
            <div className="grade"></div>

            <div className="calendario">
                <div className="data">
                    <p className="dia">_26</p>
                    <p className="mes">jun</p>
                </div>
                <div className="hexa">
                    <Hexagono imagem={agenda2} color={'#53BFEE'} />
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
                    <p className="dia">_14</p>
                    <p className="mes">jul</p>
                </div>
                <div className="hexa">
                    <Hexagono imagem={agenda3} color={'#1A1A1A'} />
                </div>
                <div className="info">
                    <p className="titulo">Front in Sampa</p>
                    <p className="info_">O mais tradicional evento sobre front-end de São Paulo chega a sua 7ª edição em 2018. De volta ao Teatro do Maksoud Plaza Hotel, vamos reunir a comunidade em Julho em torno do melhor conteúdo sobre desenvolvimento de interfaces através de apresentações inesquecíveis.</p>
                    <a href="http://www.frontinsampa.com.br/" className="site">Acesse o site aqui!</a>
                </div>
            </div>

            <div className="grade"></div>

            <div className="calendario">
                <div className="data">
                    <p className="dia">_15</p>
                    <p className="mes">out</p>
                </div>
                <div className="hexa">
                    <Hexagono imagem={agenda4} color={'#21415F'} />
                </div>
                <div className="info">
                    <p className="titulo">Futurecom</p>
                    <p className="info_">Realizada pela Informa Exhibitions, o propósito do Futurecom é reunir as forças do mercado e oferecer às empresas e profissionais participantes um ambiente estimulante para o desenvolvimento de negócios e networking.</p>
                    <a href="https://www.futurecom.com.br/pt/home.html" className="site">Acesse o site aqui!</a>
                </div>
            </div>

            <div className="grade"></div>

                        <div className="calendario">
                <div className="data">
                    <p className="dia">_10</p>
                    <p className="mes">nov</p>
                </div>
                <div className="hexa">
                    <Hexagono imagem={agenda5} color={'#003D3F'} />
                </div>
                <div className="info">
                    <p className="titulo">Roadsec</p>
                    <p className="info_">É um roadshow itinerante que leva um dia inteiro de atividades e conteúdos sobre hacking, segurança da informação e tecnologia por todo o país.</p>
                    <a href="http://roadsec.com.br/saopaulo-2018" className="site">Acesse o site aqui!</a>
                </div>
            </div>
        </section>  
    );
  }
}

export default Agenda;