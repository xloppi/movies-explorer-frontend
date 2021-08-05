import React from 'react';
import logo from '../../images/logo.svg';
import './Header.css';
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';

function Header({pathname, isMenuOpen, setMenuOpen, loggedIn}) {
    return (
      <header className={`header ${ pathname === '/' && 'header_theme_azure-black'}`}>
        <div className="header__container">
          <Link to="/" className="header__logo-link">
            <img className="header__logo" src={logo} alt="логотип" />
          </Link>
          <Navigation {...{pathname, isMenuOpen, setMenuOpen, loggedIn}}/>
        </div>
      </header>
    );
}

export default Header;
