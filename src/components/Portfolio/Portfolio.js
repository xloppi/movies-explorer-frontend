import "./Portfolio.css";
import portfolioLink from "../../images/portfolio-link.svg"

function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__list">
        <li className="portfolio__list-item">
          <a className="portfolio__list-item-link" href="https://github.com/xloppi/how-to-learn">
            <p className="portfolio__list-item-title">Статичный сайт</p>
            <img className="portfolio__list-item-img" src={portfolioLink} alt="значок ссылки"></img>
          </a>
        </li>
        <li className="portfolio__list-item">
          <a className="portfolio__list-item-link" href="https://github.com/xloppi/russian-travel">
            <p className="portfolio__list-item-title">Адаптивный сайт</p>
            <img className="portfolio__list-item-img" src={portfolioLink} alt="значок ссылки"></img>
          </a>
        </li>
        <li className="portfolio__list-item">
          <a className="portfolio__list-item-link" href="https://github.com/xloppi/react-mesto-api-full">
            <p className="portfolio__list-item-title">Одностраничное приложение</p>
            <img className="portfolio__list-item-img" src={portfolioLink} alt="значок ссылки"></img>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
