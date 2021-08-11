import './MoviesCard.css';
import { useState, useEffect } from 'react';

function MoviesCard({ pathname, card, handleMovieCardSave, handleMovieCardDelete, savedMovieCards }) {
  const cardImageUrl = pathname === '/movies' ? `https://api.nomoreparties.co${card.image.url}` : card.image
  const trailer = pathname === '/movies' ? card.trailerLink : card.trailer
  const [isCardSaved, setCardSaved] = useState(false);

  useEffect(() => {
    if (savedMovieCards.some(elem => elem.movieId === card.id)) {
      setCardSaved(true);
    } else {
      setCardSaved(false)
    }
  },[savedMovieCards, card]);

/*   const isCardSaved = savedMovieCards.some(elem => elem.movieId === card.id);
  console.log(savedMovieCards) */

  const handleClick = () => {
    if (isCardSaved) {
      handleMovieCardDelete(card);
    }
    if (!isCardSaved) {
      handleMovieCardSave(card);
    }
  }

  const handleClickDelete = () => {
    handleMovieCardDelete(card);
  }

    return (
      <li className="movies-card">
        <a href={trailer} target="_blank" rel="noreferrer">
         <img className="movies-card__image" src={cardImageUrl} alt={"описание которое будет приходить с сервера"} />
        </a>
        { (pathname === '/movies') ? (
          <button
            className={`movies-card__button-save ${isCardSaved && 'movies-card__button-save-active'}`}
            onClick={handleClick}
          >
            Сохранить
          </button>
        ) : (
          <button
            onClick={handleClickDelete}
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
