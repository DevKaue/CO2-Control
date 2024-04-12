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
          <h1>Olá, seja bem-vindo de volta!</h1>
          <h2>Faça seu login agora</h2>
          <form>
            <div className="input-container">
              <FontAwesomeIcon icon={faEnvelope} className="input-icon"/>
              <input type="email" placeholder="Seu e-mail" />
            </div>
            <button type="submit">Obter código</button>
          </form>
          <Link to="/">Voltar para Login</Link>
        </div>
      </div>
    );
  }
}

export default RecoverPassword;
