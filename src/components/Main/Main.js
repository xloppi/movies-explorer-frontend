import './Main.css';
import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Footer from "../Footer/Footer";

function Main({pathname, isMenuOpen, setMenuOpen, loggedIn}) {
    return (
      <main className="main">
        <Header {...{pathname, isMenuOpen, setMenuOpen, loggedIn}}/>
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Footer />
      </main>
    );
}

export default Main;
