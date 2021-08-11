import "./Register.css";
import logo from "../../images/logo.svg";
import { useFormWithValidation } from "../../hooks/useForm";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Preloader from "../Preloader/Preloader";

function Register({ handleRegister, serverError, isLoading }) {
  const { values, handleInputChange, errors, isValid } =
    useFormWithValidation();

  const [serverErrorMessage, setServerErrorMessage] = useState("");
  const [registerData, setRegisterData] = useState({
    email: "",
    password: "",
    name: "",
  });

  useEffect(() => {
    setRegisterData({
      email: values.email,
      password: values.password,
      name: values.name,
    });
  }, [values]);

  useEffect(() => {
    if (serverError === 409) {
      setServerErrorMessage("Такой пользователь уже существует");
    }
    if (serverError === 400) {
      setServerErrorMessage(
        "Переданы некорректные данные при создании пользователя"
      );
    }
  }, [serverError]);

  const handleSubmit = (event) => {
    event.preventDefault();
    handleRegister(registerData);
  };

  return (
    <div className="register">
      <div className="register__container">
        <header className="register__header">
          <img className="register__header-image" src={logo} alt="логотип" />
          <h1 className="register__header-title">Добро пожаловать!</h1>
        </header>
        <main className="register__content">
          <form className="register__form" onSubmit={handleSubmit}>
            {isLoading ? (
              <Preloader />
            ) : (
              <fieldset className="register__form-fieldset">
                <p className="register__form-input-name">Имя</p>
                <input
                  type="text"
                  name="name"
                  id="name-input"
                  className="register__form-input"
                  minLength="2"
                  maxLength="30"
                  onChange={handleInputChange}
                  value={values.name || ""}
                  required
                />
                <span className="register__form-input-error">
                  {errors.name || ""}
                </span>
                <p className="register__form-input-name">E-mail</p>
                <input
                  type="email"
                  name="email"
                  id="email-input"
                  className="register__form-input"
                  onChange={handleInputChange}
                  value={values.email || ""}
                  required
                />
                <span className="register__form-input-error">
                  {errors.email || ""}
                </span>
                <p className="register__form-input-name">Пароль</p>
                <input
                  type="password"
                  name="password"
                  id="password-input"
                  className="register__form-input"
                  onChange={handleInputChange}
                  value={values.password || ""}
                  required
                />
                <span className="register__form-input-error">
                  {errors.password || ""}
                </span>
              </fieldset>
            )}
            <span className="register__form-server-error">
              {serverErrorMessage}
            </span>
            <button
              className={`register__form-button-submit ${
                !isValid && "register__form-button-submit_disabled"
              }`}
              type="submit"
              disabled={!isValid}
            >
              Зарегистрироваться
            </button>
          </form>
          <div className="register__navigation">
            <p className="register__navigation-title">Уже зарегистрированы?</p>
            <Link className="register__navigation-link" to="/signin">
              Войти
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Register;
