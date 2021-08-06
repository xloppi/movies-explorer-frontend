import './MoviesCard.css';
import cardImage from '../../images/cards_images/card_image_1.jpg'
import { useState } from 'react';

function MoviesCard({ pathname }) {

  // Для проверки кнопки сохранить

  const [isCardSaved, setCardSaved] = useState(false);

  const hadleCardLike = () => {
    if (isCardSaved) {
      setCardSaved(false)
    } else {
      setCardSaved(true)
    }
  }

    return (
      <li className="movies-card">
        <img className="movies-card__image" src={cardImage} alt={"описание которое будет приходить с сервера"} />
        { (pathname === '/movies') ? (
          <button
            className={`movies-card__button-save ${isCardSaved && 'movies-card__button-save-active'}`}
            onClick={hadleCardLike}
          >
            Сохранить
          </button>
        ) : (
          <button
            className="movies-card__button-save movies-card__button-delete"
          />
        )}
        <div className="movies-card__description">
          <h2 className="movies-card__title">33 слова о дизайне11111111111111111111111111111111111111111111</h2>
          <div className="movies-card__time-container">
            <p className="movies-card__time">1ч 17м</p>
          </div>
        </div>
      </li>
    );
}

export default MoviesCard;
