import './Profile.css';
import Header from '../Header/Header';
import { useFormWithValidation } from "../../hooks/useForm";
import { useState, useEffect } from "react";


function Profile({pathname, isMenuOpen, setMenuOpen, loggedIn, currentUser, handleLogout}) {
  const [sameData, setSameData] = useState(true);

  const { values, handleInputChange, errors, isValid,  } = useFormWithValidation();

  useEffect(() => {
    if (values.name === currentUser.name || values.email === currentUser.email) {
      setSameData(true)
    }
  },[values, currentUser]);

  return (
    <>
      <Header {...{pathname, isMenuOpen, setMenuOpen, loggedIn}}/>
      <section className="profile">
        <div className="profile__container">
          <h2 className="profile__title">Привет, {currentUser.name}!</h2>
          <form className="profile__form">
            <fieldset className="profile__form-fieldset">
              <div className="profile__form-item">
                <p className="profile__form-input-name">Имя</p>
                <input
                  type="text"
                  name="name"
                  placeholder={currentUser.name}
                  value={values.name || ''}
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
                  value={values.email || ''}
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
            <button className={`profile__form-button-submit ${!isValid && "profile__form-button-submit_disabled"}`} type="submit" disabled={(!isValid && sameData)}>Редактировать</button>
          </form>
          <button className="profile__button-exit" onClick={handleLogout}>Выйти из аккаунта</button>
        </div>
      </section>
    </>
  );
}

export default Profile;
