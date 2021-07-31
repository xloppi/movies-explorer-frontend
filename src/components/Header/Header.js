import React from 'react';
import logo from '../../images/logo.svg';
import './Header.css';
import Navigation from '../Navigation/Navigation';

function Header({isMenuOpen, setMenuOpen}) {
    return (
      <header className="header">
        <div className="header__container">
          <img className="header__logo" src={logo} alt="логотип" />
          <Navigation isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen}/>
        </div>
      </header>
    );
}

export default Header;
