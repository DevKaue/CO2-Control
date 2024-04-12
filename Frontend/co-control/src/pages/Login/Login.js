import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import './Login.scss'; // Importando o arquivo CSS
import imageLogin from '../../assets/imgs/Img-senha.svg';
import logo from '../../assets/imgs/Logo-site.svg';

class Login extends React.Component {
  render() {
    return (
      <div className="container">
        <img src={imageLogin} className="imageLogin" alt="Imagem de Login" />
        <div className="login-container">
          <img src={logo} className="logo" alt="Logo" />
          <h1>Olá, seja bem-vindo de volta!</h1>
          <h2>Faça seu login agora</h2>
          <form>
            <div className="input-container">
              <FontAwesomeIcon icon={faEnvelope} className="input-icon"/>
              <input type="email" placeholder="Seu e-mail" />
            </div>
            <div className="input-container">
              <FontAwesomeIcon icon={faLock} className="input-icon"/>
              <input type="password" placeholder="Sua senha" />
            </div>
            <button type="submit">Entrar</button>
          </form>
          <p>Esqueceu sua senha?</p>
        </div>
      </div>
    );
  }
}

export default Login;
