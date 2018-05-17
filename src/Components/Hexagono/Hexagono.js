import React, {Component} from 'react';
import './Hexagono.css';


class Hexagono extends Component{
    constructor(props){
        super(props);
        this.background = "url(" + this.props.imagem + ")";
        this.color = this.props.color;
    }    

    render = function () {
        console.log(this.background);
        return (
            <div>
                <div className="hexagon" style={{background: this.background}}>
                <div className="hexTop" style={{background: this.color}}></div>
                <div className="hexBottom" style={{background: this.color}}></div>
                </div>
            
            </div>
        );
    }
}

export default Hexagono;