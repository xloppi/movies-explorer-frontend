import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";
import MoreButton from "../MoreButton/MoreButton";
import { useState, useEffect } from 'react';

function MoviesCardList({pathname, movieCards, isLoading}) {

  const [count, setCount] = useState(12);
  const [countAddCards, setCountAddCards] = useState(3);

  useEffect(() => {
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
    }

    checkWindowWidth();

    const checkResize = () => {
      setTimeout(checkWindowWidth, 1000);
    }

    window.addEventListener('resize', checkResize);

    return window.removeEventListener('resize', checkResize);
  }, []);

  const handleAddCards = () =>{
    setCount(count + countAddCards);
  }

    return (
      <section className="movies-card-list">
        <div className="movies-card-list__container">
          <ul className="movies-card-list__list">
          {movieCards.slice(0, count).map(card => <MoviesCard key={card.id} card={card} />)}
          </ul>
        </div>
        {(count < movieCards.length) && <MoreButton {...{handleAddCards}}/>}
      </section>
    );
}

export default MoviesCardList;
