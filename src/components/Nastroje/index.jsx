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
  const playHarfa = () => {
    new Audio('.../../assets/nastroje/harfa-zvuk.mp3').play();
  };
  const playHoboj = () => {
    new Audio('../../assets/nastroje/hoboj-zvuk.mp3').play();
  };
  const playKlarinet = () => {
    new Audio('../../assets/nastroje/klarinet-zvuk.mp3').play();
  };
  const playKytara = () => {
    new Audio('../../assets/nastroje/kytara-zvuk.mp3').play();
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
      <button className="nastroje__item" onClick={playBici}>
        <img src="../../assets/img/bici.jpg" alt="Bicí" />
      </button>

      <button className="nastroje__item" onClick={playElkytara}>
        <img src="../../assets/img/elkytara.jpg" alt="Elektrická kytara" />
      </button>

      <button className="nastroje__item" onClick={playFletna}>
        <img src="../../assets/img/fletna.jpg" alt="Flétna" />
      </button>

      <button className="nastroje__item" onClick={playHarfa}>
        <img src="../../assets/img/harfa.jpg" alt="Harfa" />
      </button>

      <button className="nastroje__item" onClick={playHoboj}>
        <img src="../../assets/img/hoboj.png" alt="Hoboj" />
      </button>

      <button className="nastroje__item" onClick={playKlarinet}>
        <img src="../../assets/img/klarinet.jpg" alt="Klarinet" />
      </button>

      <button className="nastroje__item" onClick={playKytara}>
        <img src="../../assets/img/kytara.jpg" alt="Kytara" />
      </button>

      <button className="nastroje__item" onClick={playPiano}>
        <img src="../../assets/img/piano.jpg" alt="Piano" />
      </button>

      <button className="nastroje__item" onClick={playSaxofon}>
        <img src="../../assets/img/saxofon.jpg" alt="Saxofon" />
      </button>

      <button className="nastroje__item" onClick={playTrubka}>
        <img src="../../assets/img/trubka.jpg" alt="Piano" />
      </button>

      <button className="nastroje__item" onClick={playVarhany}>
        <img src="../../assets/img/varhany.jpg" alt="Varhany" />
      </button>

      <button className="nastroje__item" onClick={playVioloncello}>
        <img src="../../assets/img/violoncello.jpg" alt="Violoncello" />
      </button>
    </div>
  );
};
