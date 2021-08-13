import "./Profile.css";
import Header from "../Header/Header";
import Preloader from "../Preloader/Preloader";
import { useFormWithValidation } from "../../hooks/useForm";
import { useState, useEffect } from "react";

function Profile({
  pathname,
  loggedIn,
  currentUser,
  serverError,
  handleLogout,
  isLoading,
  handleProfileUpdate,
}) {
  const { values, handleInputChange, errors, isValid } =
    useFormWithValidation();
  const [sameData, setSameData] = useState(true);
  const [updateData, setUpdateData] = useState({
    email: "",
    name: "",
  });
  const [serverErrorMessage, setServerErrorMessage] = useState("");

  useEffect(() => {
    if (serverError === 500) {
      setServerErrorMessage("Ошибка на сервере");
    }
    if (serverError === 200) {
      setServerErrorMessage("Редактирование профиля прошло успешно!");
    }
  }, [serverError]);

  useEffect(() => {
    setUpdateData({
      email: values.email,
      name: values.name,
    });
  }, [values]);

/*   useEffect(() => {
    if (pathname !== '/profile') {
      setServerErrorMessage("");
    }
  }, [pathname]); */

  useEffect(() => {
    if (
      values.name === currentUser.name &&
      values.email === currentUser.email
    ) {
      setSameData(true);
    } else {
      setSameData(false);
    }
  }, [values, currentUser]);

  const handleSubmit = (event) => {
    event.preventDefault();
    handleProfileUpdate(updateData);
  };

  return (
    <>
      <Header {...{ pathname, loggedIn }} />
      <section className="profile">
        <div className="profile__container">
          <h2 className="profile__title">Привет, {currentUser.name}!</h2>
          <form className="profile__form" onSubmit={handleSubmit}>
            {isLoading ? (
              <Preloader />
            ) : (
              <fieldset className="profile__form-fieldset">
                <div className="profile__form-item">
                  <p className="profile__form-input-name">Имя</p>
                  <input
                    type="text"
                    name="name"
                    placeholder={currentUser.name}
                    value={values.name || ""}
                    onChange={handleInputChange}
                    id="name-input"
                    className="profile__form-input"
                    required
                  />
                </div>
                <span className="profile__form-input-error">
                  {errors.name || ""}
                </span>
                <div className="profile__form-item">
                  <p className="profile__form-input-name">E-mail</p>
                  <input
                    type="email"
                    name="email"
                    placeholder={currentUser.email}
                    value={values.email || ""}
                    onChange={handleInputChange}
                    id="name-input"
                    className="profile__form-input"
                    required
                  />
                </div>
                <span className="profile__form-input-error">
                  {errors.email || ""}
                </span>
              </fieldset>
            )}
            <span className="login__form-server-error">
              {serverErrorMessage}
            </span>
            <button
              className={`profile__form-button-submit ${
                (!isValid || sameData) && "profile__form-button-submit_disabled"
              }`}
              type="submit"
              disabled={!isValid || sameData}
            >
              Редактировать
            </button>
          </form>
          <button className="profile__button-exit" onClick={handleLogout}>
            Выйти из аккаунта
          </button>
        </div>
      </section>
    </>
  );
}

export default Profile;
