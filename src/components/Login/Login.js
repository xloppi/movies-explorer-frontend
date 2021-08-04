import './Login.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

function Login() {
  return (
    <div className="login">
      <div className="login__container">
        <header className="login__header-container">
          <img className="login__header-image" src={logo} alt="логотип"/>
          <h1 className="login__header-title">Рады видеть!</h1>
        </header>
        <main className="login__content">
          <form className="login__form">
            <fieldset className="login__form-fieldset">
              <p className="login__form-input-name">E-mail</p>
              <input
                type="email"
                name="email"
                id="email-input"
                className="login__form-input"
                required
              />
              <span className="login__form-input-error"></span>
              <p className="login__form-input-name">Пароль</p>
              <input
                type="password"
                name="password"
                id="password-input"
                className="login__form-input"
                required
              />
              <span className="login__form-input-error"></span>
            </fieldset>
            <button className="login__form-button-submit" type="button">Войти</button>
          </form>
          <div className="login__navigation">
            <p className="login__navigation-title">Ещё не зарегистрированы?</p>
            <Link className="login__navigation-link" to="/signup">
              Регистрация
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Login;
