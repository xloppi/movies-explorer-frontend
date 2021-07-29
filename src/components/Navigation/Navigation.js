import './Navigation.css';

function Navigation() {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <a className="navigation__link-signup" href="#">Регистрация</a>
        <a className="navigation__link-signin" href="#">Войти</a>
      </ul>
    </nav>
  );
}

export default Navigation;
