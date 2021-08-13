import './Navigation.css';
import account from '../../images/account-icon.svg';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';

function Navigation({ pathname, loggedIn }) {

  const [isMenuOpen, setMenuOpen] = useState(false);

  const buttonClick = () => {
    if (isMenuOpen) {
      setMenuOpen(false);
    } else {
      setMenuOpen(true);
    }
  }

  return (
    <div className="navigation">
      {loggedIn ? (
        <>
          <button
            className={`navigation__burger-button`}
            type="button"
            onClick={buttonClick}
          >
            <span className={`navigation__burger-button-span ${isMenuOpen && 'navigation__burger-button-span-active'}`}></span>
            <span className={`navigation__burger-button-span ${isMenuOpen && 'navigation__burger-button-span-active'}`}></span>
            <span className={`navigation__burger-button-span ${isMenuOpen && 'navigation__burger-button-span-active'}`}></span>
          </button>
          <nav className={`navigation__links ${isMenuOpen && 'navigation__links_active'}`}>
            <div className={`navigation__container ${isMenuOpen && 'navigation__container_active'}`}>
              <ul className="navigation__list navigation__list-logged-in">
                <li className="navigation__item">
                  <NavLink className="navigation__link navigation__link-main-page" to="/">Главная</NavLink>
                </li>
                <li className="navigation__item">
                  <NavLink className="navigation__link" activeClassName="navigation__link_active" to="/movies">
                    Фильмы
                  </NavLink>
                </li>
                <li className="navigation__item">
                  <NavLink className="navigation__link" activeClassName="navigation__link_active" to="/saved-movies">
                    Сохранённые фильмы
                  </NavLink>
                </li>
                <li className="navigation__item navigation__link-account-container">
                  <img className="navigation__account-icon" src={account} alt="иконка аккаунта" />
                  <NavLink className="navigation__link navigation__link-account" activeClassName="navigation__link_active" to="/profile">
                    Аккаунт
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </>
      ) : (
        <nav className="navigation__links-main-page">
          <ul className="navigation__list navigation__list-main-page">
            <Link className="navigation__link-signup" to="/signup">Регистрация</Link>
            <Link className="navigation__link-signin" to="/signin">Войти</Link>
          </ul>
        </nav>
      )
      }



    </div>
  );
}

export default Navigation;
