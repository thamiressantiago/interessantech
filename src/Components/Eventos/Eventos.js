import React, {Component} from 'react';
import './Eventos.css';
import Carrossel from '../Carrossel/Carrossel';

class Eventos extends Component {
    render (){
        return (    
            <section className="Eventos">
                <h2>Eventos</h2>
                <hr /> <hr />
                <div className="teste">
                    <Carrossel />
                </div>
            </section>   
        );
    }
}

export default Eventos;