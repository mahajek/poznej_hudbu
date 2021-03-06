import React, { useState, useEffect } from 'react';
import './style.css';
// import './mp3.js';

export const Klavesy = (props) => {
  const [nota, setNota] = useState('');

  // callback
  const { zahrano } = props;

  useEffect(() => {
    console.log('start');
    document.addEventListener('keypress', keepPlay);

    return () => {
      console.log('stop');
      document.removeEventListener('keypress', keepPlay);
    };
  }, []);

  // zahraje tón, fce zahrano - předává hodnotu do rodiče Notes
  const playC1 = () => {
    new Audio('./assets/tony/C1.mp3').play();
    setNota('playC1');
    zahrano('C');
  };
  const playD = () => {
    new Audio('./assets/tony/D.mp3').play();
    setNota('playD');
    zahrano('D');
  };
  const playE = () => {
    new Audio('./assets/tony/E.mp3').play();
    setNota('playE');
    zahrano('E');
  };
  const playF = () => {
    new Audio('./assets/tony/F.mp3').play();
    setNota('playF');
    zahrano('F');
  };
  const playG = () => {
    new Audio('./assets/tony/G.mp3').play();
    setNota('playG');
    zahrano('G');
  };
  const playA = () => {
    new Audio('./assets/tony/A.mp3').play();
    setNota('playA');
    zahrano('A');
  };
  const playH = () => {
    new Audio('./assets/tony/H.mp3').play();
    setNota('playH');
    zahrano('H');
  };
  const playC2 = () => {
    new Audio('./assets/tony/C2.mp3').play();
    setNota('playC2');
    zahrano('C2');
  };
  const playCis = () => {
    new Audio('./assets/tony/Cis.mp3').play();
    setNota('playCis');
    zahrano('Cis');
  };
  const playDis = () => {
    new Audio('./assets/tony/Dis.mp3').play();
    setNota('playDis');
    zahrano('Dis');
  };
  const playFis = () => {
    new Audio('./assets/tony/Fis.mp3').play();
    setNota('playFis');
    zahrano('Fis');
  };
  const playGis = () => {
    new Audio('./assets/tony/Gis.mp3').play();
    setNota('playGis');
    zahrano('Gis');
  };
  const playAis = () => {
    new Audio('./assets/tony/Ais.mp3').play();
    setNota('playAis');
    zahrano('Ais');
  };

  const keepPlay = (e) => {
    console.log(e.code);
    if (e.code === 'KeyS') {
      playC1();
    }
    if (e.code === 'KeyD') {
      playD();
    }
    if (e.code === 'KeyF') {
      playE();
    }
    if (e.code === 'KeyG') {
      playF();
    }
    if (e.code === 'KeyH') {
      playG();
    }
    if (e.code === 'KeyJ') {
      playA();
    }
    if (e.code === 'KeyK') {
      playH();
    }
    if (e.code === 'KeyL') {
      playC2();
    }
    if (e.code === 'KeyE') {
      playCis();
    }
    if (e.code === 'KeyR') {
      playDis();
    }
    if (e.code === 'KeyY') {
      playFis();
    }
    if (e.code === 'KeyU') {
      playGis();
    }
    if (e.code === 'KeyI') {
      playAis();
    }
  };

  const changeC1 = () => {
    if (nota === 'playC1') {
      return 'bila is-active';
    }
    return 'bila';
  };
  const changeD = () => {
    if (nota === 'playD') {
      return 'bila is-active';
    }
    return 'bila';
  };
  const changeE = () => {
    if (nota === 'playE') {
      return 'bila is-active';
    }
    return 'bila';
  };
  const changeF = () => {
    if (nota === 'playF') {
      return 'bila is-active';
    }
    return 'bila';
  };
  const changeG = () => {
    if (nota === 'playG') {
      return 'bila is-active';
    }
    return 'bila';
  };
  const changeA = () => {
    if (nota === 'playA') {
      return 'bila is-active';
    }
    return 'bila';
  };
  const changeH = () => {
    if (nota === 'playH') {
      return 'bila is-active';
    }
    return 'bila';
  };
  const changeC2 = () => {
    if (nota === 'playC2') {
      return 'bila is-active';
    }
    return 'bila';
  };
  const changeCis = () => {
    if (nota === 'playCis') {
      return 'cerna cerna--cis is-active';
    }
    return 'cerna cerna--cis';
  };
  const changeDis = () => {
    if (nota === 'playDis') {
      return 'cerna cerna--dis is-active';
    }
    return 'cerna cerna--dis';
  };

  const changeFis = () => {
    if (nota === 'playFis') {
      return 'cerna cerna--fis is-active';
    }
    return 'cerna cerna--fis';
  };
  const changeGis = () => {
    if (nota === 'playGis') {
      return 'cerna cerna--gis is-active';
    }
    return 'cerna cerna--gis';
  };
  const changeAis = () => {
    if (nota === 'playAis') {
      return 'cerna cerna--ais is-active';
    }
    return 'cerna cerna--ais';
  };

  return (
    <div className="klavesy__container klavesy__container--size">
      <div className="klavesy">
        <button className={changeC1()} onClick={playC1}>
          <span className="bila__letter" activeClassName="is-active">´(s)</span>
          <span className="ton__letter ton__letter--size">c1</span>
        </button>

        <button className={changeD()} onClick={playD}>
          <span className="bila__letter">(d)</span>
          <span className="ton__letter ton__letter--size">d</span>
        </button>

        <button className={changeE()} onClick={playE}>
          <span className="bila__letter">(f)</span>
          <span className="ton__letter ton__letter--size">e</span>
        </button>

        <button className={changeF()} onClick={playF}>
          <span className="bila__letter">(g)</span>
          <span className="ton__letter ton__letter--size">f</span>
        </button>

        <button className={changeG()} onClick={playG}>
          <span className="bila__letter">(h)</span>
          <span className="ton__letter ton__letter--size">g</span>
        </button>

        <button className={changeA()} onClick={playA}>
          <span className="bila__letter">(j)</span>
          <span className="ton__letter ton__letter--size">a</span>
        </button>

        <button className={changeH()} onClick={playH}>
          <span className="bila__letter">(k)</span>
          <span className="ton__letter ton__letter--size">h</span>
        </button>

        <button className={changeC2()} onClick={playC2}>
          <span className="bila__letter">(l)</span>
          <span className="ton__letter ton__letter--size">c2</span>
        </button>

        <button className={changeCis()} onClick={playCis}>
          <span className="cerna__letter" activeClassName="is-active">(e)</span>
          <span className="toncerna__letter toncerna__letter--size">cis</span>
        </button>
        <button className={changeDis()} onClick={playDis}>
          <span className="cerna__letter">(r)</span>
          <span className="toncerna__letter toncerna__letter--size">dis</span>
        </button>

        <button className={changeFis()} onClick={playFis}>
          <span className="cerna__letter">(y)</span>
          <span className="toncerna__letter toncerna__letter--size">fis</span>
        </button>

        <button className={changeGis()} onClick={playGis}>
          <span className="cerna__letter">(u)</span>
          <span className="toncerna__letter toncerna__letter--size">gis</span>
        </button>

        <button className={changeAis()} onClick={playAis}>
          <span className="cerna__letter">(i)</span>
          <span className="toncerna__letter toncerna__letter--size">ais</span>
        </button>
      </div>
    </div>
  );
};
