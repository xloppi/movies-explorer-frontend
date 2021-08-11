import './SavedMovies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";

function SavedMovies({pathname, loggedIn, movieCards, savedMovieCards, handleMovieCardDelete, searchSavedMovieCards}) {
  const [isFilterChecked, setIsFilterChecked] = useState(false);
  const [renderCards, setRenderCards] = useState(savedMovieCards);

  const filterShortFilms = (data) => {
    return data.filter((item) => item.duration <= 40);
  };

  useEffect(() => {
    if (isFilterChecked) {
      setRenderCards(filterShortFilms(savedMovieCards));
    }
    if (!isFilterChecked) {
      setRenderCards(savedMovieCards);
    }
  }, [isFilterChecked, savedMovieCards]);

    return (
      <>
        <Header {...{pathname, loggedIn}}/>
        <main className="saved-movies">
          <div className="saved-movies__container">
          <SearchForm {...{ setIsFilterChecked }} onSearch={searchSavedMovieCards}/>
          <MoviesCardList {...{pathname, movieCards, savedMovieCards, handleMovieCardDelete}} renderCards={renderCards}/>
          </div>
        </main>
        <Footer />
      </>
    );
}

export default SavedMovies;
