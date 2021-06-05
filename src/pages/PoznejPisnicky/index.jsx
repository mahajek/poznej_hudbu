import React, { useState } from 'react';
import { render } from 'react-dom';
import './style.css';

import { Klavesy } from '../../components/Klavesy/index';
import { Kviz } from '../../components/Kviz/index';
import { Navigace } from '../../components/Navigace';

export const PoznejPisnicky = () => {
  const questions = [
    {
      questionText: 'Na kolik dob se počítají "Ovčáci, čtveráci"?',
      answerOptions: [
        { answerText: 'Dvě doby', isCorrect: false },
        { answerText: 'Tři doby', isCorrect: false },
        { answerText: 'Čtyři doby', isCorrect: true },
        { answerText: 'Šest dob', isCorrect: false },
      ],
    },
    {
      questionText: 'Kudy leze pes v písničce "Kočka leze dírou"?',
      answerOptions: [
        { answerText: 'Dveřmi', isCorrect: false },
        { answerText: 'Oknem', isCorrect: true },
        { answerText: 'Dírou', isCorrect: false },
        { answerText: 'Plotem', isCorrect: false },
      ],
    },
    {
      questionText:
        'V jaké pohádce se objevuje písnička "Není nutno" od Jaroslava Uhlíře a Zdeňka Svěráka?',
      answerOptions: [
        { answerText: 'Tři veteráni', isCorrect: true },
        { answerText: 'Šíleně smutná princezna', isCorrect: false },
        { answerText: 'Sůl nad zlato', isCorrect: false },
        { answerText: 'Pyšná princezna', isCorrect: false },
      ],
    },
    {
      questionText: '"Ovčáci, čtveráci, vy jste...," doplň slova písničky.',
      answerOptions: [
        {
          answerText: '"...naši vičku, i tu čočovičku, vypásli."',
          isCorrect: true,
        },
        { answerText: '"...a já sám, vždycky sám."', isCorrect: false },
        { answerText: '"...ach synku, synku, doma-li jsi."', isCorrect: false },
        { answerText: '"...pes oknem, pes oknem.', isCorrect: false },
      ],
    },
  ];

  const [nota, setNota] = useState('');

  const zahranaKlavesa = (klavesa) => {
    setNota(klavesa);
  };

  return (
    <>
      <div className="main-page">
        <h1 className="main-page__nadpis">Poznej písničky</h1>
        <Navigace />
        <div className="pisnicky">
          <div className="pisnicka">
            <h3 className="pisnicka__nadpis">Kočka leze dírou</h3>
            <div className="pisnicka__noty">
              '&=0=R=T=V=:!=R=T=V=:!=D=D=C=U=S=9!=D=D=C=U=S=9!=T=S=R=:.
            </div>
          </div>
          <div className="pisnicka">
            <h3 className="pisnicka__nadpis">Kočka leze dírou</h3>
            <div className="pisnicka__noty">
              '&=2!B=C=D=E=!=V==V!=W=W=!=f=!=W=W=!=f=!=Å=Å!=T=T=!=S=S=!=f=!=Å=Å!=T=T=!=S=S=!=b=!.
            </div>
          </div>
          <div className="pisnicka">
            <h3 className="pisnicka__nadpis">Ach synku, synku</h3>
            <div className="pisnicka__noty">
              '&=3R=R=R!=B=C=d!=E=D=c!=b=:!=T=T=T!=D=E=f!=G=F=U=T!=S=S=S!=C=D=e!=F=E=T=S!=R=R=R!=B=C=d!=E=D=c!=b=:!=.
            </div>
          </div>
          <div className="pisnicka">
            <h3 className="pisnicka__nadpis">Óda na radost - Mozart</h3>
            <div className="pisnicka__noty">
              '&=0T=T=U=V!=V=U=T=S!=R=R=S=T!=T´=C=S=!=T=T=U=V!=V=U=T=S!=R=R=S=T!=S³=B=R=.
            </div>
          </div>
        </div>
        <Klavesy className="klavesy__pisnicky" />
        <Kviz otazky={questions} />
      </div>
    </>
  );
};
