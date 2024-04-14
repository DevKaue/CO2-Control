import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './RecoverPassword.scss'; // Importando o arquivo CSS
import imageLogin from '../../assets/imgs/Img-senha.svg';
import logo from '../../assets/imgs/Logo-site.svg';
import { Link } from 'react-router-dom';

class RecoverPassword extends React.Component {
  render() {
    return (
      <div className="container">
        <img src={imageLogin} className="imageLogin" alt="Imagem de Login" />
        <div className="login-container">
          <img src={logo} className="logo" alt="Logo" />
          <h1>Esqueceu sua senha?<br/>Recupere via e-mail agora</h1>
          <h2>Insira a sua conta existente</h2>
          <form>
            <div className="input-container">
              <FontAwesomeIcon icon={faEnvelope} className="input-icon"/>
              <input type="email" placeholder="Seu e-mail" />
            </div>
            <button type="submit">Obter código</button>
          </form>
          <ul className="back">
            <Link to="/" className="link">Voltar para Login</Link>
          </ul>
        </div>
      </div>
    );
  }
}

export default RecoverPassword;
