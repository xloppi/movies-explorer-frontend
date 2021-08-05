import './SavedMovies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoreButton from "../MoreButton/MoreButton";
import Footer from "../Footer/Footer";

function SavedMovies({pathname, isMenuOpen, setMenuOpen, loggedIn}) {
    return (
      <>
        <Header {...{pathname, isMenuOpen, setMenuOpen, loggedIn}}/>
        <main className="saved-movies">
          <div className="saved-movies__container">
          <SearchForm />
          <MoviesCardList />
          <MoreButton />
          </div>
        </main>
        <Footer />
      </>
    );
}

export default SavedMovies;
