import React from 'react';
import './style.css';

export const Nastroje = () => {
  const playBici = (e) => {
    new Audio('../../assets/nastroje/bici-zvuk.mp3').play();
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
  const playHousle = () => {
    new Audio('../../assets/nastroje/housle-zvuk.mp3').play();
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
  const playVarhany = () => {
    new Audio('../../assets/nastroje/varhany-zvuk.mp3').play();
  };
  const playVioloncello = () => {
    new Audio('../../assets/nastroje/violoncello-zvuk.mp3').play();
  };

  return (
    <div className="nastroje">
      <button className="nastroje__item" onClick={playFletna}>
        <img src="../../assets/img/fletna.jpg" alt="Flétna" />
      </button>

      <button className="nastroje__item" onClick={playHarfa}>
        <img src="../../assets/img/harfa.jpg" alt="Harfa" />
      </button>

      <button className="nastroje__item" onClick={playHousle}>
        <img src="../../assets/img/housle.jpg" alt="Housle" />
      </button>

      <button className="nastroje__item" onClick={playPiano}>
        <img src="../../assets/img/piano.jpg" alt="Piano" />
      </button>

      <button className="nastroje__item" onClick={playSaxofon}>
        <img src="../../assets/img/saxofon.jpg" alt="Saxofon" />
      </button>

      <button className="nastroje__item" onClick={playVarhany}>
        <img src="../../assets/img/varhany.jpg" alt="Varhany" />
      </button>

      <button className="nastroje__item" onClick={playVioloncello}>
        <img src="../../assets/img/violoncello.jpg" alt="Violoncello" />
      </button>

      <button className="nastroje__item" onClick={playBici}>
        <img src="../../assets/img/bici.jpg" alt="Bicí" />
      </button>

      <button className="nastroje__item" onClick={playElkytara}>
        <img src="../../assets/img/elkytara.jpg" alt="Elektrická kytara" />
      </button>

      <button className="nastroje__item" onClick={playHammondy}>
        <img src="../../assets/img/hammondy.jpg" alt="Hammondovy varhany" />
      </button>

      <button className="nastroje__item" onClick={playKytara}>
        <img src="../../assets/img/kytara.jpg" alt="Kytara" />
      </button>

      <button className="nastroje__item" onClick={playMixpult}>
        <img src="../../assets/img/mixpult.jpg" alt="Mixážní pult" />
      </button>
    </div>
  );
};
