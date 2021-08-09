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
import { useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";

function App() {
  const { pathname } = useLocation();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [movieCards, setMovieCards] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState("");

  const getMovieCards = (event) => {
    const query = event.target.search.value;
    console.log(query);
    event.preventDefault();
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
          localStorage.setItem("beatFilmMovies", JSON.stringify(beatFilmMovies));
          setMovieCards(beatFilmMovies);
        })
        .catch((err) => {console.log(err)})
    } else {
      setError("Нужно ввести ключевое слово");
    }
  };

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
              error,
              setError,
              movieCards
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
