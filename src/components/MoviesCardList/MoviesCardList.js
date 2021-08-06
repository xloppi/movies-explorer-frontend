import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({pathname}) {
    return (
      <section className="movies-card-list">
        <div className="movies-card-list__container">
          <ul className="movies-card-list__list">
            <MoviesCard {...{pathname}}/>
            <MoviesCard {...{pathname}}/>
            <MoviesCard {...{pathname}}/>
            <MoviesCard {...{pathname}}/>
            <MoviesCard {...{pathname}}/>
            <MoviesCard {...{pathname}}/>
            <MoviesCard {...{pathname}}/>
            <MoviesCard {...{pathname}}/>
            <MoviesCard {...{pathname}}/>
            <MoviesCard {...{pathname}}/>
            <MoviesCard {...{pathname}}/>
            <MoviesCard {...{pathname}}/>
          </ul>
        </div>
      </section>
    );
}

export default MoviesCardList;
