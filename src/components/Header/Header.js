import React from 'react';
import logo from '../../images/logo.svg';
import './Header.css';

function Header() {
    return (
      <header className="header">
        <div className="header__container">
          <img className="header__logo" src={logo} alt="логотип" />
          <ul className="header__nav">
              <a className="header__btn-signup" href="#">Регистрация</a>
              <a className="header__btn-signin" href="#">Войти</a>
          </ul>
        </div>
      </header>
    );
}

export default Header;
