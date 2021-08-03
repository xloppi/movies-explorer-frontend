import "./App.css";
import Header from '../Header/Header';
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import NotFound from "../NotFound/NotFound";
import { useEffect, useState } from 'react';
import { Route, Switch, Redirect, useHistory, useLocation } from 'react-router-dom';

function App() {
  const { pathname } = useLocation();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const history = useHistory();

  return (
    <div className="app">
      <Switch>
        <Route path="/" exact>
          <Main {...{pathname, isMenuOpen, setMenuOpen, loggedIn}}/>
        </Route>

        <Route path="/movies" exact>
          <Movies {...{pathname, isMenuOpen, setMenuOpen, loggedIn}}/>
        </Route>

        <Route path="/saved-movies" exact>
          <SavedMovies {...{pathname, isMenuOpen, setMenuOpen, loggedIn}}/>
        </Route>

        <Route path="/profile" exact>
          <Profile {...{pathname, isMenuOpen, setMenuOpen, loggedIn}}/>
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
