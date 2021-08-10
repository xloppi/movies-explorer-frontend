import './Login.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import { useFormWithValidation } from "../../hooks/useForm";
import { useState, useEffect } from "react";

function Login({handleLogin, serverError}) {
  const { values, handleInputChange, errors, isValid} = useFormWithValidation();

  const [serverErrorMessage, setServerErrorMessage] = useState('')
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    setLoginData({
      email: values.email,
      password: values.password,
    })
  },[values]);

  useEffect(() => {
    if(serverError === 401) {
      setServerErrorMessage('Неправильная почта или пароль');
    }
  }, [serverError]);

  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin(loginData);
  }

  return (
    <div className="login">
      <div className="login__container">
        <header className="login__header-container">
          <img className="login__header-image" src={logo} alt="логотип"/>
          <h1 className="login__header-title">Рады видеть!</h1>
        </header>
        <main className="login__content">
          <form className="login__form" onSubmit={handleSubmit}>
            <fieldset className="login__form-fieldset">
              <p className="login__form-input-name">E-mail</p>
              <input
                type="email"
                name="email"
                id="email-input"
                className="login__form-input"
                value={values.email || ''}
                onChange={handleInputChange}
                required
              />
              <span className="login__form-input-error">
                {errors.email || ''}
              </span>
              <p className="login__form-input-name">Пароль</p>
              <input
                type="password"
                name="password"
                id="password-input"
                className="login__form-input"
                value={values.password || ''}
                onChange={handleInputChange}
                required
              />
              <span className="login__form-input-error">
                {errors.password || ''}
              </span>
            </fieldset>
            <button className={`login__form-button-submit ${!isValid && "login__form-button-submit_disabled"}`} type="submit" disabled={!isValid}>Войти</button>
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
