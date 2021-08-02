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
      <Header {...{pathname, isMenuOpen, setMenuOpen, loggedIn}} />
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>

        <Route path="/movies" exact>
          <Movies />
        </Route>

        <Route path="/saved-movies" exact>
          <SavedMovies />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
