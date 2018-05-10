import React, {Component} from 'react';
import './Banner.css';
class Banner extends Component {
render (){
return (    

<section className="banner">

    <div>
        <img  id="logo" src="LOGO01.png"/>
    </div>

    <div>
        <p>
            Saiba sobre os eventos TECH mais interessantes de SP.
        </p>    
    </div>   

    <div>
        <img id="seta" src="seta roxa.png"/>
    </div>

</section>   

)
}
}

export default Banner;