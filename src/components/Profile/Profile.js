import './Profile.css';
import Header from '../Header/Header';

function Profile({pathname, isMenuOpen, setMenuOpen, loggedIn}) {
  return (
    <>
      <Header {...{pathname, isMenuOpen, setMenuOpen, loggedIn}}/>
      <section className="profile">
        <div className="profile__container">
          <h2 className="profile__title">Привет, Алексей!</h2>
          <form className="profile__form">
            <fieldset className="profile__form-fieldset">
              <div className="profile__form-item">
                <p className="profile__form-input-name">Имя</p>
                <input
                  type="text"
                  name="name"
                  value="Виталий"
                  id="name-input"
                  className="profile__form-input"
                  required
                />
              </div>
              <div className="profile__form-item">
                <p className="profile__form-input-name">E-mail</p>
                <input
                  type="email"
                  name="email"
                  value="pochta@yandex.ru"
                  id="name-input"
                  className="profile__form-input"
                  required
                />
              </div>
            </fieldset>
            <button className="profile__form-button-submit" type="button">Редактировать</button>
          </form>
          <button className="profile__button-exit">Выйти из аккаунта</button>
        </div>
      </section>
    </>
  );
}

export default Profile;
