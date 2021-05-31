import React from 'react';
import './style.css';

export const Nastroje = () => {
  const playBici = (e) => {
    new Audio('../../assets/nastroje/bici-zvuk.mp3').play();
  };
  const playBasa = () => {
    new Audio('../../assets/nastroje/elbasa-zvuk.mp3').play();
  };
  const playElkytara = () => {
    new Audio('../../assets/nastroje/elkytara-zvuk.mp3').play();
  };
  const playFletna = () => {
    new Audio('../../assets/nastroje/fletna-zvuk.mp3').play();
  };
  const playHammondy = () => {
    new Audio('../../assets/nastroje/hammondy-zvuk.mp3').play();
  };
  const playHarfa = () => {
    new Audio('.../../assets/nastroje/harfa-zvuk.mp3').play();
  };
  const playHoboj = () => {
    new Audio('../../assets/nastroje/hoboj-zvuk.mp3').play();
  };
  const playHousle = () => {
    new Audio('../../assets/nastroje/housle-zvuk.mp3').play();
  };
  const playKlarinet = () => {
    new Audio('../../assets/nastroje/klarinet-zvuk.mp3').play();
  };
  const playKlavesy = () => {
    new Audio('../../assets/nastroje/klavesy-zvuk.mp3').play();
  };
  const playKytara = () => {
    new Audio('../../assets/nastroje/kytara-zvuk.mp3').play();
  };
  const playMixpult = () => {
    new Audio('../../assets/nastroje/mixpult-zvuk.mp3').play();
  };
  const playPiano = () => {
    new Audio('../../assets/nastroje/piano-zvuk.mp3').play();
  };
  const playSaxofon = () => {
    new Audio('../../assets/nastroje/saxofon-zvuk.mp3').play();
  };
  const playTrubka = () => {
    new Audio('../../assets/nastroje/trubka-zvuk.mp3').play();
  };
  const playVarhany = () => {
    new Audio('../../assets/nastroje/varhany-zvuk.mp3').play();
  };
  const playVioloncello = () => {
    new Audio('../../assets/nastroje/violoncello-zvuk.mp3').play();
  };

  return (
    <div className="nastroje">
      <h4>Bicí</h4>
      <button className="nastroje__item" onClick={playBici}>
        <img src="../../assets/img/bici.jpg" alt="Bicí" />
      </button>

      <h4>Basová kytara</h4>
      <button className="nastroje__item" onClick={playBasa}>
        <img src="../../assets/img/elbasa.jpg" alt="Basová kytara" />
      </button>

      <h4>Elektrická kytara</h4>
      <button className="nastroje__item" onClick={playElkytara}>
        <img src="../../assets/img/elkytara.jpg" alt="Elektrická kytara" />
      </button>

      <h4>Flétna</h4>
      <button className="nastroje__item" onClick={playFletna}>
        <img src="../../assets/img/fletna.jpg" alt="Flétna" />
      </button>

      <h4>Hammondovy varhany</h4>
      <button className="nastroje__item" onClick={playHammondy}>
        <img src="../../assets/img/hammondy.jpg" alt="Hammondovy varhany" />
      </button>

      <h4>Harfa</h4>
      <button className="nastroje__item" onClick={playHarfa}>
        <img src="../../assets/img/harfa.jpg" alt="Harfa" />
      </button>

      <h4>Hoboj</h4>
      <button className="nastroje__item" onClick={playHoboj}>
        <img src="../../assets/img/hoboj.jpg" alt="Hoboj" />
      </button>

      <h4>Housle</h4>
      <button className="nastroje__item" onClick={playHousle}>
        <img src="../../assets/img/housle.jpg" alt="Housle" />
      </button>

      <h4>Klarinet</h4>
      <button className="nastroje__item" onClick={playKlarinet}>
        <img src="../../assets/img/klarinet.jpg" alt="Klarinet" />
      </button>

      <h4>Syntezátor</h4>
      <button className="nastroje__item" onClick={playKlavesy}>
        <img src="../../assets/img/klavesy.jpg" alt="Syntezátor" />
      </button>

      <h4>Akustická kytara</h4>
      <button className="nastroje__item" onClick={playKytara}>
        <img src="../../assets/img/kytara.jpg" alt="Kytara" />
      </button>

      <h4>Mixážní pult</h4>
      <button className="nastroje__item" onClick={playMixpult}>
        <img src="../../assets/img/mixpult.jpg" alt="Mixážní pult" />
      </button>

      <h4>Piano</h4>
      <button className="nastroje__item" onClick={playPiano}>
        <img src="../../assets/img/piano.jpg" alt="Piano" />
      </button>

      <h4>Saxofon</h4>
      <button className="nastroje__item" onClick={playSaxofon}>
        <img src="../../assets/img/saxofon.jpg" alt="Saxofon" />
      </button>

      <h4>Trubka</h4>
      <button className="nastroje__item" onClick={playTrubka}>
        <img src="../../assets/img/trubka.jpg" alt="Trubka" />
      </button>

      <h4>Varhany</h4>
      <button className="nastroje__item" onClick={playVarhany}>
        <img src="../../assets/img/varhany.jpg" alt="Varhany" />
      </button>

      <h4>Violoncello</h4>
      <button className="nastroje__item" onClick={playVioloncello}>
        <img src="../../assets/img/violoncello.jpg" alt="Violoncello" />
      </button>
    </div>
  );
};
