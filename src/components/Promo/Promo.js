import React from 'react';
import './Promo.css';
import promo_logo from '../../images/promo_logo.png';

function Promo() {
  return (
    <section className="promo">
      <div className="promo__content">
        <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
        <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        <a className="promo__link" href="#">Узнать больше</a>
      </div>
      <img className="promo__logo" src={promo_logo} alt="логотип промо"></img>
    </section>
  );
}

export default Promo;
