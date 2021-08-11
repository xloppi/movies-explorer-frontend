import "./App.css";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import NotFound from "../NotFound/NotFound";
import * as moviesApi from "../../utils/MoviesApi";
import * as mainApi from "../../utils/MainApi";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { useState, useEffect } from "react";
import { Route, Switch, useLocation, useHistory } from "react-router-dom";

function App() {
  const { pathname } = useLocation();
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [movieCards, setMovieCards] = useState([]);
  const [savedMovieCards, setSavedMovieCards] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [serverError, setServerError] = useState("");
  const history = useHistory();
  //
  useEffect(() => {
    setMovieCards(JSON.parse(localStorage.getItem("beatFilmMovies")));
  }, []);

  useEffect(() => {
    tokenCheck();
  }, []);

  useEffect(() => {
    if (loggedIn) {
      history.push("/movies");
    }
  }, [history, loggedIn]);

  useEffect(() => {
    if (loggedIn) {
      getSavedCards(currentUser);
    }
  }, [loggedIn, currentUser]);

  /*   const filterMovieCards = () => {
    if (isFilterChecked) {
      const shortMovies = filterShortFilms(JSON.parse(localStorage.getItem("beatFilmMovies")))
      setMovieCards(shortMovies);
    }
    if (!isFilterChecked) {
      const Movies = JSON.parse(localStorage.getItem("beatFilmMovies"));
      setMovieCards(Movies);
    }
  }

  const filterSavedMovieCards = () => {
    if (isFilterChecked) {
      const shortMovies = filterShortFilms(JSON.parse(localStorage.getItem("savedCards")))
      savedMovieCards(shortMovies);
    }
    if (!isFilterChecked) {
      const Movies = JSON.parse(localStorage.getItem("savedCards"));
      savedMovieCards(Movies);
    }
  } */

  const getSavedCards = (currentUser) => {
    const token = localStorage.getItem("token");
    mainApi
      .getSavedMovieCards(token)
      .then((res) => {
        console.log(currentUser);
        const ownerCards = res.filter((c) => c.owner === currentUser._id && c);
        localStorage.setItem("savedCards", JSON.stringify(ownerCards));
        setSavedMovieCards(ownerCards);
      })
      .catch((err) => {
        console.log("Ошибка: ", err);
      });
  };

  const tokenCheck = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      return;
    }
    mainApi
      .getMe(token)
      .then((res) => {
        setCurrentUser(res);
        setLoggedIn(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const searchMovieCards = (query) => {
    if (query) {
      setIsloading(true);
      moviesApi
        .getContent()
        .then((res) => {
          const beatFilmMovies = res.filter((c) => {
            if (c.nameRU.toLowerCase().includes(query)) {
              return c;
            }
            if (c.nameEN !== null && c.nameEN.toLowerCase().includes(query)) {
              return c;
            }
            return false;
          });
          localStorage.setItem(
            "beatFilmMovies",
            JSON.stringify(beatFilmMovies)
          );
          setMovieCards(beatFilmMovies);
          console.log(movieCards);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => setIsloading(false));
    }
  };

  const searchSavedMovieCards = (query) => {
    if (query) {
      const savedFilms = JSON.parse(localStorage.getItem("savedCards"))
      const filterCards = savedFilms.filter((c) => {
        if (c.nameRU.toLowerCase().includes(query)) {
          return c;
        }
        if (c.nameEN !== null && c.nameEN.toLowerCase().includes(query)) {
          return c;
        }
        return false;
      });
      setSavedMovieCards(filterCards);
    }
  }

  const handleMovieCardSave = (card) => {
    const token = localStorage.getItem("token");
    mainApi
      .saveMovieCard(card, token)
      .then((newMovieCard) => {
        setSavedMovieCards([...savedMovieCards, newMovieCard]);
        console.log(savedMovieCards);
      })
      .catch((err) => {
        console.log("Ошибка: ", err);
      });
  };

  const handleMovieCardDelete = (card) => {
    const token = localStorage.getItem("token");
    mainApi
      .deleteMovieCard(card._id, token)
      .then((res) => {
        setSavedMovieCards((state) => state.filter((c) => c._id !== card._id));
      })
      .catch((err) => {
        console.log("Ошибка: ", err);
      });
  };

  const handleRegister = (data) => {
    setIsloading(true);
    mainApi
      .register(data)
      .then((res) => {
        setLoggedIn(true);
        history.push("/movies");
        setServerError("");
      })
      .catch((err) => {
        setServerError(err.status);
      })
      .finally(() => {
        setIsloading(false);
      });
  };

  const handleLogin = (data) => {
    setIsloading(true);
    mainApi
      .authorize(data)
      .then(({ token }) => {
        localStorage.setItem("token", token);
        setLoggedIn(true);
        tokenCheck();
        setServerError("");
      })
      .catch((err) => {
        setServerError(err.status);
      })
      .finally(() => {
        setIsloading(false);
      });
  };

  const handleProfileUpdate = (data) => {
    const token = localStorage.getItem("token");
    setIsloading(true);
    mainApi
      .updateUser(data, token)
      .then((res) => {
        console.log(res);
        setCurrentUser(res);
        setServerError("");
      })
      .catch((err) => {
        setServerError(err.status);
      })
      .finally(() => {
        setIsloading(false);
      });
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
    history.push("/");
  };

  return (
    <div className="app">
      <Switch>
        <Route path="/" exact>
          <Main {...{ pathname, loggedIn, setLoggedIn }} />
        </Route>

        <ProtectedRoute
          path="/movies"
          exact
          component={Movies}
          {...{
            pathname,
            loggedIn,
            setLoggedIn,
            searchMovieCards,
            movieCards,
            setMovieCards,
            isLoading,
            handleMovieCardSave,
            savedMovieCards,
            handleMovieCardDelete,
          }}
        />

        <ProtectedRoute
          path="/saved-movies"
          exact
          component={SavedMovies}
          {...{
            pathname,
            loggedIn,
            setLoggedIn,
            movieCards,
            isLoading,
            savedMovieCards,
            setSavedMovieCards,
            handleMovieCardDelete,
            searchSavedMovieCards,
          }}
        />

        <ProtectedRoute
          path="/profile"
          exact
          component={Profile}
          {...{
            pathname,
            loggedIn,
            isLoading,
            setLoggedIn,
            currentUser,
            serverError,
            handleLogout,
            handleProfileUpdate,
          }}
        />

        <Route path="/signin" exact>
          <Login {...{ handleLogin, serverError, isLoading }} />
        </Route>

        <Route path="/signup" exact>
          <Register {...{ handleRegister, serverError, isLoading }} />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
