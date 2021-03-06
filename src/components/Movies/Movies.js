import "./Movies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";

function Movies({
  pathname,
  loggedIn,
  searchMovieCards,
  movieCards,
  isLoading,
  handleMovieCardSave,
  handleMovieCardDelete,
  savedMovieCards,
  notFound,
  setNotFound
}) {
  const [isFilterChecked, setIsFilterChecked] = useState(false);
  const [renderCards, setRenderCards] = useState([]);

  const filterShortFilms = (data) => {
    return data.filter((item) => item.duration <= 40);
  };

  useEffect(() => {
    renderCards.length ? setNotFound(false) : setNotFound(true)
  }, [isFilterChecked, renderCards, setNotFound]);

  useEffect(() => {
    if (isFilterChecked) {
      setRenderCards(filterShortFilms(movieCards));
    }
    if (!isFilterChecked) {
      setRenderCards(movieCards);
    }
  }, [isFilterChecked, movieCards]);


  return (
    <>
      <Header {...{ pathname, loggedIn }} />
      <main className="movies">
        <div className="movies__container">
          <SearchForm {...{ setIsFilterChecked }} onSearch={searchMovieCards} />
          <MoviesCardList
            {...{
              pathname,
              isLoading,
              handleMovieCardSave,
              handleMovieCardDelete,
              movieCards,
              savedMovieCards,
              notFound,
            }}
            renderCards={renderCards}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Movies;
