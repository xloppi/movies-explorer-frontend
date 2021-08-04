import React from 'react';
import './Promo.css';
import promo_logo from '../../images/promo_logo.png';
import NavTab from '../NavTab/NavTab';

function Promo() {
  return (
    <section className="promo">
      <div className="promo__container">
        <div className="promo__content">
          <h1 className="promo__title">Учебный проект студента факультета Веб&#8209;разработки.</h1>
          <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
          <NavTab />
        </div>
        <img className="promo__logo" src={promo_logo} alt="логотип промо"></img>
      </div>
    </section>
  );
}

export default Promo;
