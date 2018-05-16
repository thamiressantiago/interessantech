import React, {Component} from 'react';
import './Carrossel.css';
import Carousell from 'nuka-carousel';
import com1 from '../../Images/evento1.jpg';
import com2 from '../../Images/evento2.jpg';
import com3 from '../../Images/evento3.jpg';
import com4 from '../../Images/evento4.jpg';
// var Carousel = require('nuka-carousel'); --> instalar: npm install nuka-carousel

class Carrossel extends Component {
    render() {
        return (
            <div className="carousel externo">
                <Carousell slideWidth={"800px"}>
                    <img className="carousel" src={com1} />
                    <img className="carousel" src={com2}/>
                    <img className="carousel" src={com3} />
                    <img className="carousel" src={com4} /> 
                </Carousell>                
            </div>
        );
    }
}

export default Carrossel;

/**
 * slidesToShow={3} Quantos aparecem ao msm tempo
 * cellAlign="center" Alinhamento no começo
 * dragging={false} Desabilita botão quanto não exisir slider proximo
 * slidesToScroll={3} Quatas slider passam por cada NEXT
 * slideWidth={"800px"} Tamanho do slider
 * speed={500} Velocidade da trancisão
 */