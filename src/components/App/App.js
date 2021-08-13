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
  const [allMovieCards, setAllMovieCards] = useState([]);
  const [movieCards, setMovieCards] = useState([]);
  const [savedMovieCards, setSavedMovieCards] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [serverError, setServerError] = useState("");
  const [notFound, setNotFound] = useState(false);
  const history = useHistory();
  //
  useEffect(() => {
    const lastSearhMovies = localStorage.getItem("lastSearchMovies");
    if (lastSearhMovies) {
      setMovieCards(JSON.parse(lastSearhMovies));
    }
  }, []);

  useEffect(() => {
    setNotFound(false);
  }, [pathname]);

  useEffect(() => {
    tokenCheck();
  }, []);

  useEffect(() => {
    if (loggedIn) {
      const token = localStorage.getItem("token");
      if (!token) {
        return;
      }
      Promise.all([mainApi.getMe(token), mainApi.getSavedMovieCards(token)])
        .then(([resUser, resMovies]) => {
          setCurrentUser(resUser);
          const ownerCards = resMovies.filter(
            (c) => c.owner === resUser._id && c
          );
          localStorage.setItem("savedCards", JSON.stringify(ownerCards));
          setSavedMovieCards(ownerCards);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [loggedIn]);

  useEffect(() => {
    if (loggedIn) {
      history.push("/movies");
    }
  }, [history, loggedIn]);

  const getSavedCards = (currentUser) => {
    const token = localStorage.getItem("token");
    mainApi
      .getSavedMovieCards(token)
      .then((res) => {
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

  const filterByName = (data, query) => {
    return data.filter((c) => {
      if (c.nameRU.toLowerCase().includes(query.toLowerCase())) {
        return c;
      }
      if (
        c.nameEN !== null &&
        c.nameEN.toLowerCase().includes(query.toLowerCase())
      ) {
        return c;
      }
      return false;
    });
  };

  const checkNotFound = (data) => {
    !data.length ? setNotFound(true) : setNotFound(false)
  }

  const searchMovieCards = (query) => {
    if (query) {
      if (allMovieCards.length === 0) {
        setIsloading(true);
        moviesApi
          .getContent()
          .then((res) => {
            localStorage.setItem("allMovies", JSON.stringify(res));
            const allMovies = JSON.parse(localStorage.getItem("allMovies"));
            setAllMovieCards(allMovies);

            const lastSearchMovies = filterByName(res, query);
            checkNotFound(lastSearchMovies);
            localStorage.setItem(
              "lastSearchMovies",
              JSON.stringify(lastSearchMovies)
            );
            setMovieCards(lastSearchMovies);
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => setIsloading(false));
      }
      if (allMovieCards.length !== 0) {
        const lastSearchMovies = filterByName(allMovieCards, query);
        checkNotFound(lastSearchMovies);
        localStorage.setItem(
          "lastSearchMovies",
          JSON.stringify(lastSearchMovies)
        );
        setMovieCards(lastSearchMovies);
      }
    }
  };

  const searchSavedMovieCards = (query) => {
    if (query) {
      const savedFilms = JSON.parse(localStorage.getItem("savedCards"));
      const filterCards = filterByName(savedFilms, query)
      checkNotFound(filterCards);
      setSavedMovieCards(filterCards);
    }
  };

  const handleMovieCardSave = (card) => {
    const token = localStorage.getItem("token");
    mainApi
      .saveMovieCard(card, token)
      .then((newMovieCard) => {
        setSavedMovieCards([...savedMovieCards, newMovieCard]);
      })
      .catch((err) => {
        console.log("Ошибка: ", err);
      });
  };

  const handleMovieCardDelete = (card) => {
    const token = localStorage.getItem("token");
    let deletedCard = card;
    if (card._id) {
      deletedCard = card;
    }
    if (!card._id) {
      deletedCard = savedMovieCards.find((c) => c.movieId === card.id);
    }
    mainApi
      .deleteMovieCard(deletedCard._id, token)
      .then((res) => {
        getSavedCards(currentUser);
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
        handleLogin(data);
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

  const handleProfileUpdate = (data) => {
    const token = localStorage.getItem("token");
    setIsloading(true);
    mainApi
      .updateUser(data, token)
      .then((res) => {
        setCurrentUser(res);
        setServerError(200);
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
            notFound,
            setNotFound
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
            notFound,
            setNotFound
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
