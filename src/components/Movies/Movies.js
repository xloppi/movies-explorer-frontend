import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoreButton from "../MoreButton/MoreButton";

function Movies() {
    return (
      <main className="movies">
        <div className="movies__container">
        <SearchForm />
        <MoviesCardList />
        <MoreButton />
        </div>
      </main>
    );
}

export default Movies;
