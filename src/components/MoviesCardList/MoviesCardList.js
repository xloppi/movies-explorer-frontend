import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import MoreButton from "../MoreButton/MoreButton";
import Preloader from "../Preloader/Preloader";
import { useState, useEffect } from "react";

function MoviesCardList({
  pathname,
  isLoading,
  renderCards,
  handleMovieCardSave,
  handleMovieCardDelete,
  savedMovieCards,
}) {
  const [count, setCount] = useState(12);
  const [countAddCards, setCountAddCards] = useState(3);

  const checkWindowWidth = () => {
    if (window.innerWidth >= 768) {
      setCount(12);
      setCountAddCards(3);
    }
    if (window.innerWidth <= 768) {
      setCount(8);
      setCountAddCards(2);
    }
    if (window.innerWidth <= 320) {
      setCount(5);
      setCountAddCards(2);
    }
  };

  useEffect(() => {
    checkWindowWidth();

    function checkResize() {
      setTimeout(checkWindowWidth, 1000);
    }

    window.addEventListener("resize", checkResize);

    return () => window.removeEventListener("resize", checkResize);
  }, []);

  const handleAddCards = () => {
    setCount(count + countAddCards);
  };

  return (
    <section className="movies-card-list">
      <div className="movies-card-list__container">
        {isLoading ? (
          <Preloader />
        ) : (
          <ul className="movies-card-list__list">
            {renderCards && renderCards.slice(0, count).map((card) => (
              <MoviesCard
                key={card.id ? card.id : card._id}
                card={card}
                pathname={pathname}
                renderCards={renderCards}
                savedMovieCards={savedMovieCards}
                handleMovieCardDelete={handleMovieCardDelete}
                handleMovieCardSave={handleMovieCardSave}
              />
            ))}
          </ul>
        )}
      </div>
      {(renderCards && count < renderCards.length && !isLoading) && <MoreButton {...{ handleAddCards }} />}
    </section>
  );
}

export default MoviesCardList;

/*   renderCards
    .slice(0, count)
    .map((card) => (
      <MoviesCard
        key={card.id ? card.id : card._id}
        card={card}
        pathname={pathname}
        savedMovieCards={savedMovieCards}
        handleMovieCardDelete={handleMovieCardDelete}
        handleMovieCardSave={handleMovieCardSave}
      />
    )) */
