import React from 'react';
import '../assets/styles/components/Header.scss';
const Header = () =>(

  <header className="header">
    <img className="header__img" src="https://resources.redbull.com/logos/redbullcom/v1/redbullcom-logo.svg" alt="Platzi Video"/>
    <nav className="menu-header__content">
    <div className="menu-header__navigation-margin" aria-hidden="true" role="presentation"></div>
    <a className="menu-header__navigation-item" href="/discover"><div className="menu-header__navigation-item-content">Riders</div></a>
    <div className="menu-header__navigation-gutter" aria-hidden="true" role="presentation"></div>
    <a className="menu-header__navigation-item menu-header__navigation-item--active" href="/events"><div className="menu-header__navigation-item-content">Eventos</div></a>
    <div className="menu-header__navigation-gutter" aria-hidden="true" role="presentation"></div>
    <a className="menu-header__navigation-item menu-header__navigation-item--active" href="/athletes"><div className="menu-header__navigation-item-content">Contenido</div></a>
    <div className="menu-header__navigation-gutter" aria-hidden="true" role="presentation"></div>
    <a className="menu-header__navigation-item" href="https://www.redbull.com/energydrink"><div className="menu-header__navigation-item-content">Productos</div></a>
    <div className="menu-header__navigation-margin" aria-hidden="true" role="presentation"></div>   
    </nav>

   <div className="menu-header__buttons">
     <button className="menu-header__button">
       <div className="menu-header__button-icon" aria-label="Buscar">
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
           <path fill="none" d="M24 0v24H0V0" data-name="Bounding area"></path>
           <path d="M10 5.5A4.5 4.5 0 115.5 10 4.51 4.51 0 0110 5.5M10 4a6 6 0 106 6 6 6 0 00-6-6z"></path>
           <rect x="17.25" y="15.18" width="1.5" height="5.66" rx=".5" ry=".5" transform="rotate(-45 17.998 18.005)"></rect>
           </svg>
       </div>
      </button>
        <div className="menu-header__button">
          <button className="user-icon">
            <div className="user-icon__login-icon menu-header__button-icon" aria-label="Iniciar sesión">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12.006,14.75a3.612,3.612,0,0,1-3.658-3.4l-.3-2.606a3.943,3.943,0,0,1,.86-3.188A4,4,0,0,1,12.006,4.25,4,4,0,0,1,15.1,5.56a3.95,3.95,0,0,1,.858,3.206l-.292,2.588A3.614,3.614,0,0,1,12.006,14.75Zm0-9a2.53,2.53,0,0,0-1.961.792A2.482,2.482,0,0,0,9.54,8.557l.3,2.628a2.172,2.172,0,0,0,4.338,0l.295-2.609a2.507,2.507,0,0,0-.5-2.034A2.539,2.539,0,0,0,12.006,5.75Z"></path>
                <path d="M18.986,20.48a5.952,5.952,0,0,0-2.83-4.77.5.5,0,0,0-.7.1l-.31.34a.4.4,0,0,0,.1.69A4.855,4.855,0,0,1,17.3,19.5H6.706a4.913,4.913,0,0,1,2.05-2.66.4.4,0,0,0,.11-.69l-.31-.34a.5.5,0,0,0-.7-.1,5.952,5.952,0,0,0-2.83,4.77.5.5,0,0,0,.5.52h12.96A.5.5,0,0,0,18.986,20.48Z"></path>
              </svg>
            </div>
          </button>
        </div>
      <button className="menu-header__button">
        <div className="menu-header__button-icon" aria-label="Menú">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill-rule="evenodd"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 17.333A1.333 1.333 0 1112 20a1.333 1.333 0 010-2.667zm6.667 0a1.333 1.333 0 110 2.667 1.333 1.333 0 010-2.667zm-13.334 0a1.333 1.333 0 110 2.667 1.333 1.333 0 010-2.667zM12 10.667a1.333 1.333 0 110 2.666 1.333 1.333 0 010-2.666zm-6.667 0a1.333 1.333 0 110 2.666 1.333 1.333 0 010-2.666zm13.334 0a1.333 1.333 0 110 2.666 1.333 1.333 0 010-2.666zM12 4a1.333 1.333 0 110 2.667A1.333 1.333 0 0112 4zM5.333 4a1.333 1.333 0 110 2.667 1.333 1.333 0 010-2.667zm13.334 0a1.333 1.333 0 110 2.667 1.333 1.333 0 010-2.667z"></path></g></svg>
        </div>
      </button>
    </div>
  </header>
);

export default Header;