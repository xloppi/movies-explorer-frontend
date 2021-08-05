import "./Techs.css";

function Techs() {
  return (
    <section className="techs">
      <div className="techs__container">
        <h2 className="about-project__title main__section-title">Технологии</h2>
        <div className="techs__description">
          <h3 className="techs__title">7 технологий</h3>
          <p className="techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
          <ul className="techs__list">
            <li className="techs__list-item">
              <p className="techs__list-item-name">HTML</p>
            </li>
            <li className="techs__list-item">
              <p className="techs__list-item-name">CSS</p>
            </li>
            <li className="techs__list-item">
              <p className="techs__list-item-name">JS</p>
            </li>
            <li className="techs__list-item">
              <p className="techs__list-item-name">React</p>
            </li>
            <li className="techs__list-item">
              <p className="techs__list-item-name">Git</p>
            </li>
            <li className="techs__list-item">
              <p className="techs__list-item-name">Express.js</p>
            </li>
            <li className="techs__list-item">
              <p className="techs__list-item-name">mongoDB</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Techs;
