import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="about-project" id="about">
      <div className="about-project__container">
        <h2 className="about-project__title main__section-title">О проекте</h2>
        <ul className="about-project__description">
          <li className="about-project__description-item">
            <h3 className="about-project__description-item-title">Дипломный проект включал 5 этапов</h3>
            <p className="about-project__description-item-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </li>
          <li className="about-project__description-item">
            <h3 className="about-project__description-item-title">На выполнение диплома ушло 5 недель</h3>
            <p className="about-project__description-item-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </li>
        </ul>
        <ul className="about-project__schedule">
          <li className="about-project__schedule-stage">
              <p className="about-project__schedule-stage-time about-project__schedule-stage-time_theme_green">1&nbsp;неделя</p>
              <p className="about-project__schedule-stage-name">Back&#8209;end</p>
          </li>
          <li className="about-project__schedule-stage">
              <p className="about-project__schedule-stage-time">4&nbsp;недели</p>
              <p className="about-project__schedule-stage-name">Front&#8209;end</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default AboutProject;
