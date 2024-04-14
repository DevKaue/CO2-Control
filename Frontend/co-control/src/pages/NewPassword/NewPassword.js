import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import './NewPassword.scss'; // Importando o arquivo CSS
import imageLogin from '../../assets/imgs/Img-senha.svg';
import logo from '../../assets/imgs/Logo-site.svg';


export const NewPassword = () => {

    const history = useHistory();

    const handleclick = () => {
        // window.location.href = '/'
        history.push({
            pathname: "/"
        })
        console.log('Clicou')
    }


    return (
      <div className="container">
        <img src={imageLogin} className="imageLogin" alt="Imagem de Login" />
        <div className="login-container">
          <img src={logo} className="logo" alt="Logo" />
          <h1>Define uma nova senha!<br/>Anote sua senha para não esquecer</h1>
          <h2>Insira a sua nova senha</h2>
          <form>
          <div className="input-container">
              <FontAwesomeIcon icon={faLock} className="input-icon"/>
              <input type="password" placeholder="Nova senha" />
            </div>
            <div className="input-container">
              <FontAwesomeIcon icon={faLock} className="input-icon"/>
              <input type="password" placeholder="Confime sua senha" />
            </div>
            <button type="submit" onClick={handleclick()}>Continuar</button>
          </form>
        </div>
      </div>
    );
  }
export default NewPassword;
