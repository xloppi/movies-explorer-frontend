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
            <h3 className="about-me__name">Алексей</h3>
            <p className="about-me__subtitle">Фронтенд-разработчик, 33 года</p>
            <p className="about-me__description">Я родился и живу в г. Жуковский. В 2011 году закончил Московский Авиационный Институт по специальности инженер-аэродинамик. Женат, двое детей. С 2011 года работал по специальности. В данный момент прохожу курс по веб&#8209;разработке в Яндекс.Практикуме. Верю что в 33 года смогу поменять профессию =)</p>
            <ul className="about-me__links">
              {/* Нету у меня аккаунта на Facebook =) */}
              <li className="about-me__item"><a className="about-me__link" href="https://vk.com/id2531855">VK</a></li>
              <li className="about-me__item"><a className="about-me__link" href="https://github.com/xloppi">Github</a></li>
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
