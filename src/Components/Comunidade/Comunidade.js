import React, { Component } from 'react';
import './Comunidade.css';
import Hexagono from '../Hexagono/Hexagono';
import com1 from '../../Images/dj.png';
import com2 from '../../Images/_net.png';
import com9 from '../../Images/desprograme.png';
import com4 from '../../Images/railgirls.jpg';
import com5 from '../../Images/pyladies.png';
import com6 from '../../Images/reprograma.jpg';
import com7 from '../../Images/wordpress.jpeg';
import com8 from '../../Images/phpwomen.png';
import com3 from '../../Images/programaria.jpg';
import com10 from '../../Images/jssp.png';

class Comunidade extends Component {
    render() {
      return (
        <section className="Comunidade">
        <h2>Comunidade</h2>
        <hr /> <hr />
        <div id="colmeia">
            <div className="comunity1">
                <Hexagono imagem={com1} />
                <Hexagono imagem={com2} />
                <Hexagono imagem={com3} />
            </div>
            <div className="comunity2">
                <Hexagono imagem={com4} />
                <Hexagono imagem={com5} />
                <Hexagono imagem={com6} />
                <Hexagono imagem={com7} />
            </div>
            <div className="comunity1">
                <Hexagono imagem={com8} />
                <Hexagono imagem={com9} />
                <Hexagono imagem={com10} />
            </div>
        </div>
    </section>
      );
    }
  }
  
  export default Comunidade;