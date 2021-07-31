import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList() {
    return (
      <section className="movies-card-list">
        <div className="movies-card-list__container">
          <ul className="movies-card-list__list">
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
          </ul>
        </div>
      </section>
    );
}

export default MoviesCardList;
