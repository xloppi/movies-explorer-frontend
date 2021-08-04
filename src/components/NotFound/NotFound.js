import './NotFound.css';

function NotFound() {
  return (
    <section className="not-found">
        <h1 className="not-found__title">404</h1>
        <p className="not-found__subtitle">Страница не найдена</p>
        <a className="not-found__button-back" href="/">Назад</a>
    </section>
  );
}

export default NotFound;
