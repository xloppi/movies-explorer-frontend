import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container ">
        <h3 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
        <div className="footer__content">
          <p className="footer__copyrigth">&copy; {new Date().getFullYear()}</p>
          <ul className="footer__list">
            <li className="footer__link-container">
              <a className="footer__link" href="https://praktikum.yandex.ru">Яндекс.Практикум</a>
            </li>
            <li className="footer__link-container">
              <a className="footer__link" href="https://github.com/">Github</a>
            </li>
            <li className="footer__link-container">
              <a className="footer__link" href="https://vk.com">VK</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
