import "./AboutMe.css";
import Portfolio from '../Portfolio/Portfolio';
import me_photo from '../../images/me.jpg';

function AboutMe() {
  return (
    <section className="about-me">
      <div className="about-me__container">
        <h2 className="about-me__title main__section-title">Студент</h2>
        <div className="about-me__content">
          <div className="about-me__info">
            <h3 className="about-me__name">Виталий</h3>
            <p className="about-me__subtitle">Фронтенд-разработчик, 30 лет</p>
            <p className="about-me__description">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб&#8209;разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
            <ul className="about-me__links">
              <li className="about-me__link">Facebook</li>
              <li className="about-me__link">Github</li>
            </ul>
          </div>
          <img className="about-me__photo" src={me_photo} alt="фото"></img>
        </div>
        <Portfolio />
      </div>
    </section>
  );
}

export default AboutMe;
