import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoreButton from "../MoreButton/MoreButton";

function SavedMovies() {
    return (
      <main className="saved-movies">
        <div className="saved-movies__container">
        <SearchForm />
        <MoviesCardList />
        <MoreButton />
        </div>
      </main>
    );
}

export default SavedMovies;
