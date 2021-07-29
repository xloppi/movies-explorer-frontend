import './MoviesCard.css';
import cardImage from '../../images/cards_images/card_image_1.png'

function MoviesCard() {
    return (
      <li className="movies-card">
        <img className="movies-card__image" src={cardImage} />
        <button className="movies-card__button-save">Сохранить</button>
        <div className="movies-card__description">
          <h2 className="movies-card__title">33 слова о дизайне</h2>
          <div className="movies-card__time-container">
            <p className="movies-card__time">1ч 17м</p>
          </div>
        </div>
      </li>
    );
}

export default MoviesCard;
