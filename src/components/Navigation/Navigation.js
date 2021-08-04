import './Navigation.css';
import account from '../../images/account-icon.svg';
import { Link } from 'react-router-dom';

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
                <li className="navigation__item"><Link className="navigation__link navigation__link-main-page" to="/">Главная</Link></li>
                <li className="navigation__item"><Link className="navigation__link navigation__link_type_bold" to="/movies">Фильмы</Link></li>
                <li className="navigation__item"><Link className="navigation__link" to="/saved-movies">Сохранённые фильмы</Link></li>
                <li className="navigation__item navigation__link-account-container">
                  <img className="navigation__account-icon" src={account} alt="иконка аккаунта"/>
                  <Link className="navigation__link navigation__link-account" to="/profile">Аккаунт</Link>
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
