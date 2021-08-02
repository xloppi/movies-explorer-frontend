import './Navigation.css';
import account from '../../images/account-icon.svg';
import { Route, Switch } from 'react-router-dom';

function Navigation({pathname, isMenuOpen, setMenuOpen, loggedIn}) {

  const buttonClick = () => {
    if(isMenuOpen) {
      setMenuOpen(false);
    } else {
      setMenuOpen(true);
    }
  }

  return (
    <div className="navigation">
      {/* Временное решение чтобы проверить как работают пути */}
      { (loggedIn || pathname !== '/') ? (
        <>
          <button className="navigation__burger-button" type="button" onClick={buttonClick}>
            <span className="navigation__burger-button-span"></span>
            <span className="navigation__burger-button-span"></span>
            <span className="navigation__burger-button-span"></span>
          </button>
          <nav className={`navigation__links ${isMenuOpen && 'navigation__links_active'}`}>
            <div className={`navigation__container ${isMenuOpen && 'navigation__container_active'}`}>
              <ul className="navigation__list navigation__list-logged-in">
                <li className="navigation__item"><a className="navigation__link navigation__link-main-page" href="#">Главная</a></li>
                <li className="navigation__item"><a className="navigation__link navigation__link_type_bold" href="#">Фильмы</a></li>
                <li className="navigation__item"><a className="navigation__link" href="#">Сохранённые фильмы</a></li>
                <li className="navigation__item navigation__link-account-container">
                  <img className="navigation__account-icon" src={account} />
                  <a className="navigation__link navigation__link-account" href="#">Аккаунт</a>
                </li>
              </ul>
            </div>
          </nav>
        </>
      ) : (
        <nav className="navigation__links-main-page">
          <ul className="navigation__list navigation__list-main-page">
            <a className="navigation__link-signup" href="#">Регистрация</a>
            <a className="navigation__link-signin" href="#">Войти</a>
          </ul>
        </nav>
        )
      }



    </div>
  );
}

export default Navigation;
