import React from 'react';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-south-video-BW2.png';
import user from '../assets/static/user-icon.png';
const Header = () =>(
  
  <header class="header">
    <img class="header__img" src={logo} alt="South Video"/>
    <div class="header__menu--nav">
    <nav>
        <a>Eventos</a>
        <a>Productos</a>
        <a>Riders</a>
        <a>Contenido</a>
    </nav>
      </div>
    <div class="header__menu">
      <div class="header__menu--profile">
        <img src={user} alt="user-icon"/>
        <p>Perfil</p>
      </div>
      <ul>
        <li><a href="/">Cuenta</a></li>
        <li><a href="/">Cerrar Sesión</a></li>
      </ul>
    </div>
  </header>
);

export default Header;