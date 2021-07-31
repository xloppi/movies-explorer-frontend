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

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Header isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />

    </div>
  );
}

export default App;
