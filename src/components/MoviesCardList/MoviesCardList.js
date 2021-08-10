import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({pathname, movieCards, isLoading}) {
    return (
      <section className="movies-card-list">
        <div className="movies-card-list__container">
          <ul className="movies-card-list__list">
          {movieCards.map(card => <MoviesCard key={card._id} card={card} />)}
          </ul>
        </div>
      </section>
    );
}

export default MoviesCardList;
