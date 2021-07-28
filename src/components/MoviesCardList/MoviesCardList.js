import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList() {
    return (
      <section className="movies-card-list">
        <ul className="movies-card-list__list">
          <MoviesCard />
        </ul>
      </section>
    );
}

export default MoviesCardList;
