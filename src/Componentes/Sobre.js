import React, {Component} from 'react';
import './Sobre.css';
class Sobre extends Component {
render (){
return (    

<section className="Sobre">

    <div>
        <img src="itpreto.png"/>
    </div>

    <div>
        <h1> SOBRE </h1>
    </div>

    <div id="p1">
        <p>
         É uma plataforma informativa sobre eventos, cursos e comunidades tecnológicas em São Paulo.
         Aqui você consegue ver tudo o que irá acontecer na cidade da garoa sem sair de casa, de forma 
         prática e rápida. Damos o nosso máximo para que os conteúdos sejam atualizados quase que
         momentaneamente,para que você fique por dentro de todas as novidades o mais rápido possível.
         Gostou da ideia? Gostaria de contribuir?
         Mande uma mensagem para nós em Contato e vamos juntos!
         Se é interessante para você, é interessante para a gente!
        </p>  
    </div>  

   
</section>   

)
}
}

export default Sobre;