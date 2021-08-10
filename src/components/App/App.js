import "./App.css";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import NotFound from "../NotFound/NotFound";
import Preloader from "../Preloader/Preloader"
import * as moviesApi from '../../utils/MoviesApi';
import { useState, useEffect } from "react";
import { Route, Switch, useLocation } from "react-router-dom";

function App() {
  const { pathname } = useLocation();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [movieCards, setMovieCards] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [isFilterChecked, setIsFilterChecked] = useState(false);

  const getMovieCards = (query) => {
    if (query) {
      setIsloading(true);
      moviesApi.getContent()
        .then((res) => {
          const beatFilmMovies = res.filter((c) => {
            if (c.nameRU.toLowerCase().includes(query)) {
              return c;
            }
            if (c.nameEN !== null && c.nameEN.toLowerCase().includes(query)) {
              return c;
            }
          });

          if (!isFilterChecked) {
            localStorage.setItem("beatFilmMovies", JSON.stringify(beatFilmMovies));
            setMovieCards(beatFilmMovies);
            console.log(beatFilmMovies)
          } else {
            const shortFilms = filterShortFilms(beatFilmMovies);
            localStorage.setItem("beatFilmMovies", JSON.stringify(shortFilms));
            setMovieCards(shortFilms);
            console.log(shortFilms)
          }
        })
        .catch((err) => {console.log(err)})
        .finally(() => setIsloading(false));
    }
  };

  const filterShortFilms = (data) => {
      return data.filter((item) => item.duration <= 40);
  }

  return (
    <div className="app">
      <Switch>
        <Route path="/" exact>
          <Main
            {...{ pathname, isMenuOpen, setMenuOpen, loggedIn, setLoggedIn }}
          />
        </Route>

        <Route path="/movies" exact>
          <Movies
            {...{
              pathname,
              isMenuOpen,
              setMenuOpen,
              loggedIn,
              setLoggedIn,
              getMovieCards,
              movieCards,
              isLoading,
              setIsFilterChecked
            }}
          />
        </Route>

        <Route path="/saved-movies" exact>
          <SavedMovies
            {...{ pathname, isMenuOpen, setMenuOpen, loggedIn, setLoggedIn }}
          />
        </Route>

        <Route path="/profile" exact>
          <Profile
            {...{ pathname, isMenuOpen, setMenuOpen, loggedIn, setLoggedIn }}
          />
        </Route>

        <Route path="/signin" exact>
          <Login />
        </Route>

        <Route path="/signup" exact>
          <Register />
        </Route>

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
