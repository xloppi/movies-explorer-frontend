import "./App.css";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import NotFound from "../NotFound/NotFound";
import * as moviesApi from '../../utils/MoviesApi';
import * as mainApi from '../../utils/MainApi';
import { useState, useEffect } from "react";
import { Route, Switch, useLocation, useHistory } from "react-router-dom";

function App() {
  const { pathname } = useLocation();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [movieCards, setMovieCards] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [isFilterChecked, setIsFilterChecked] = useState(false);
  const [serverError, setServerError] = useState('');
  const history = useHistory();

  useEffect(() => {
    tokenCheck()
  }, [])

  useEffect(() => {
    if(loggedIn) {
      history.push('/movies');
    }
  }, [history, loggedIn])

  useEffect(() => {
    if (loggedIn) {
      mainApi.getMe()
      .then(res => {
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log('Ошибка: ', err);
      });
    }
  }, [loggedIn])

  const tokenCheck = () => {
    mainApi.getMe()
      .then((res) => {
        setCurrentUser(res);
        setLoggedIn(true);
      })
      .catch((err) => {
        {console.log(err)}
      })
  }

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

  const handleRegister = (data) => {
    setIsloading(true);
    mainApi.register(data)
      .then((res) => {
        setLoggedIn(true);
        history.push('/movies');
      })
      .catch((err) => {
        setServerError(err.status)
      })
      .finally(() => {
        setIsloading(false);
      })

  }

  const handleLogin = (data) => {
    setIsloading(true);
    mainApi.authorize(data)
      .then((res) =>{
        setLoggedIn(true);
        history.push('/movies');
      })
      .catch((err) => {
        setServerError(err.status)
      })
      .finally(() => {
        setIsloading(false);
      })
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
            {...{ pathname, isMenuOpen, setMenuOpen, loggedIn, setLoggedIn, currentUser }}
          />
        </Route>

        <Route path="/signin" exact>
          <Login {...{handleLogin, serverError}}/>
        </Route>

        <Route path="/signup" exact>
          <Register {...{handleRegister, serverError}}/>
        </Route>

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
