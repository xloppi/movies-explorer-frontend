import './Register.css';
import logo from '../../images/logo.svg';

function Register() {
  return (
    <section className="register">
      <div className="register__container">
        <div className="register__header-container">
          <img className="register__header-image" src={logo} />
          <h2 className="register__header">Добро пожаловать!</h2>
        </div>
        <form className="register__form">
          <fieldset className="register__form-fieldset">
            <p className="register__form-input-name">E-mail</p>
            <input
              type="email"
              name="email"
              id="email-input"
              className="register__form-input"
              required
            />
            <span className="register__form-input-error"></span>
            <p className="register__form-input-name">Пароль</p>
            <input
              type="password"
              name="password"
              id="password-input"
              className="register__form-input"
              required
            />
            <span className="register__form-input-error"></span>
          </fieldset>
          <button className="register__form-button-submit" type="button">Зарегистрироваться</button>
        </form>
        <div className="register__navigation">
          <p className="register__navigation-title">Уже зарегистрированы?</p>
          <a className="register__navigation-link" href="#">
            Войти
          </a>
        </div>
      </div>
    </section>
  );
}

export default Register;
