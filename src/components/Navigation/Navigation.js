import './Navigation.css';
import account from '../../images/account-icon.svg';

function Navigation({isMenuOpen, setMenuOpen}) {

  const buttonClick = () => {
    if(isMenuOpen) {
      setMenuOpen(false);
    } else {
      setMenuOpen(true);
    }
  }

  return (
    <div className="navigation">
      <button className="navigation__burger-button" type="button" onClick={buttonClick}>
        <span className="navigation__burger-button-span"></span>
        <span className="navigation__burger-button-span"></span>
        <span className="navigation__burger-button-span"></span>
      </button>
{/*       <nav className="navigation__links">
        <ul className="navigation__list">
          <a className="navigation__link-signup" href="#">Регистрация</a>
          <a className="navigation__link-signin" href="#">Войти</a>
        </ul>
      </nav> */}
      <nav className={`navigation__links ${isMenuOpen && 'navigation__links_active'}`}>
        <div className={`navigation__container ${isMenuOpen && 'navigation__container_active'}`}>
          <ul className="navigation__list">
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
    </div>
  );
}

export default Navigation;
