import React, { Component } from 'react';
import './Login.css';
import user from '../../Images/user.png'

class Login extends Component {
    render() {
        return (
            <section className="login">
                <h2>Login</h2>
                <hr /> <hr />
                <div id="dados">
                    <img src={user} />
                    <p><input type="text" class="user-control" placeholder="Usuário" required /></p>
                    <p><input type="password" class="user-control" placeholder="Senha" required /></p>
                    <div id="botao">
                        <a href="/agenda"><button type="submit" class="btn">Entrar</button></a>
                        <button type="submit" class="btn">Cadastrar</button>
                    </div>
                </div>

                <p className="termos">Ao clicar em "Entrar/Cadastrar", você concorda com os <a href="">Termos e condições</a> InteressanTech e com a <a href="">Política de privacidade</a>.</p>
            </section>
        );
    }
}

export default Login;