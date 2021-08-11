import "./Movies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function Movies({
  pathname,
  loggedIn,
  getMovieCards,
  movieCards,
  isLoading,
  setIsFilterChecked,
  handleMovieCardSave,
  handleMovieCardDelete,
  savedMovieCards,
}) {
  return (
    <>
      <Header {...{ pathname, loggedIn }} />
      <main className="movies">
        <div className="movies__container">
          <SearchForm {...{ getMovieCards, setIsFilterChecked }} />
          <MoviesCardList
            {...{
              pathname,
              isLoading,
              handleMovieCardSave,
              handleMovieCardDelete,
              savedMovieCards,
            }}
            renderCards={movieCards}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Movies;
