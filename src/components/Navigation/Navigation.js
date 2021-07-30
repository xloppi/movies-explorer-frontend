import './Navigation.css';
import account from '../../images/account-icon.svg';

function Navigation() {
  return (
    <div className="navigation">
      <div className="navigation__burger-icon">
        <span className="navigation__burger-icon-span"></span>
        <span className="navigation__burger-icon-span"></span>
        <span className="navigation__burger-icon-span"></span>
      </div>
{/*       <nav className="navigation__links">
        <ul className="navigation__list">
          <a className="navigation__link-signup" href="#">Регистрация</a>
          <a className="navigation__link-signin" href="#">Войти</a>
        </ul>
      </nav> */}
      <nav className="navigation__links">
        <ul className="navigation__list">
          <li className="navigation__item"><a className="navigation__link navigation__link_type_bold" href="#">Фильмы</a></li>
          <li className="navigation__item"><a className="navigation__link" href="#">Сохранённые фильмы</a></li>
          <li className="navigation__item navigation__link-account">
            <img className="navigation__account-icon" src={account} />
            <a className="navigation__link navigation__link_type_bold" href="#">Аккаунт</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
