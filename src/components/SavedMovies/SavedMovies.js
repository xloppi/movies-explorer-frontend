import './SavedMovies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from "../Footer/Footer";

function SavedMovies({pathname, loggedIn, movieCards, setIsFilterChecked, savedMovieCards, handleMovieCardDelete}) {
    return (
      <>
        <Header {...{pathname, loggedIn}}/>
        <main className="saved-movies">
          <div className="saved-movies__container">
          <SearchForm {...{ setIsFilterChecked }}/>
          <MoviesCardList {...{pathname, movieCards, savedMovieCards, handleMovieCardDelete}} renderCards={savedMovieCards}/>
          </div>
        </main>
        <Footer />
      </>
    );
}

export default SavedMovies;
