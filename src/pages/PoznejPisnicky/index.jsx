import React, { useState } from 'react';
import { render } from 'react-dom';
import './style.css';

import { Klavesy } from '../../components/Klavesy/index';
import { Kviz } from '../../components/Kviz/index';
import { ovcaciCtveraci } from './ovcaciCtveraci.js';
import { Nota } from '../../components/Nota/index';
import { Navigace } from '../../components/Navigace';

export const PoznejPisnicky = () => {
  const questions = [
    {
      questionText: 'What is the capital of France?',
      answerOptions: [
        { answerText: 'New York', isCorrect: false },
        { answerText: 'London', isCorrect: false },
        { answerText: 'Paris', isCorrect: true },
        { answerText: 'Dublin', isCorrect: false },
      ],
    },
    {
      questionText: 'Who is CEO of Tesla?',
      answerOptions: [
        { answerText: 'Jeff Bezos', isCorrect: false },
        { answerText: 'Elon Musk', isCorrect: true },
        { answerText: 'Bill Gates', isCorrect: false },
        { answerText: 'Tony Stark', isCorrect: false },
      ],
    },
    {
      questionText: 'The iPhone was created by which company?',
      answerOptions: [
        { answerText: 'Apple', isCorrect: true },
        { answerText: 'Intel', isCorrect: false },
        { answerText: 'Amazon', isCorrect: false },
        { answerText: 'Microsoft', isCorrect: false },
      ],
    },
    {
      questionText: 'How many Harry Potter books are there?',
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
        <Klavesy className="klavesy__pisnicky" zahrano={zahranaKlavesa} />
        <Kviz otazky={questions} />
      </div>
    </>
  );
};
