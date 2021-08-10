import './MoviesCard.css';
import { useState } from 'react';

function MoviesCard({ pathname, card }) {

  // Для проверки кнопки сохранить

  const [isCardSaved, setCardSaved] = useState(false);

  const hadleCardLike = () => {
    if (isCardSaved) {
      setCardSaved(false)
    } else {
      setCardSaved(true)
    }
  }

  const cardImageUrl = `https://api.nomoreparties.co${card.image.url}`


    return (
      <li className="movies-card">
        <a href={card.trailerLink} target="_blank" rel="noreferrer">
         <img className="movies-card__image" src={cardImageUrl} alt={"описание которое будет приходить с сервера"} />
        </a>
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
          <h2 className="movies-card__title">{card.nameRU}</h2>
          <div className="movies-card__time-container">
            <p className="movies-card__time">{Math.floor(card.duration/60)}ч {card.duration%60}м</p>
          </div>
        </div>
      </li>
    );
}

export default MoviesCard;
