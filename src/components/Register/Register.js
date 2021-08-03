import './Register.css';
import logo from '../../images/logo.svg';

function Register() {
  return (
    <div className="register">
      <div className="register__container">
        <header className="register__header">
          <img className="register__header-image" src={logo} />
          <h1 className="register__header-title">Добро пожаловать!</h1>
        </header>
        <main className="register__content">
          <form className="register__form">
            <fieldset className="register__form-fieldset">
              <p className="register__form-input-name">Имя</p>
              <input
                  type="text"
                  name="name"
                  id="name-input"
                  className="register__form-input"
                  required
                />
              <span className="register__form-input-error"></span>
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
        </main>
      </div>
    </div>
  );
}

export default Register;
