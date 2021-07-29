import './Login.css';
import logo from '../../images/logo.svg';

function Login() {
  return (
    <section className="login">
      <div className="login__container">
        <div className="login__header-container">
          <img className="login__header-image" src={logo} />
          <h2 className="login__header">Рады видеть!</h2>
        </div>
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
          <a className="login__navigation-link" href="#">
            Регистрация
          </a>
        </div>
      </div>
    </section>
  );
}

export default Login;
