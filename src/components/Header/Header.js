import React from 'react';
import logo from '../../images/logo.svg';
import './Header.css';

function Header() {
    return (
      <header className="header">
        <img className="header__logo" src={logo} alt="логотип" />
        <ul className="header__nav">
            <button>Регистрация</button>
            <button>Войти</button>
        </ul>
      </header>
    );
}

export default Header;