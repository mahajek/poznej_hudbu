import React, { useState } from 'react';
import { render } from 'react-dom';
import './style.css';

import { Klavesy } from '../../components/Klavesy/index';
import { Kviz } from '../../components/Kviz/index';
import { ovcaciCtveraci } from './ovcaciCtveraci.js';
import { Nota } from '../../components/Nota/index';
import { Navigace } from '../../components/Navigace';

export const Notes = () => {
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

  const myList = [...ovcaciCtveraci];

  const testPlay = (list) => {
    if (!list.length) {
      return;
    }
    if (!list[0].test) {
      testPlay(list.shift());
      return;
    }
    if (nota === list[0].id || nota === 'E1/8') {
      console.log('succes nastavit notu na správně');
      list.shift();
    } else {
      console.log('chyba, nota nebyla správně');
    }
  };

  const zahranaKlavesa = (klavesa) => {
    setNota(klavesa);
    testPlay(myList);
  };

  return (
    <>
      <main>
        <div className="main-page">
          <h1>Poznej noty</h1>
          <Navigace title="Poznej noty" />
          {nota}
          <div className="ton">
            {ovcaciCtveraci.map((objektVpoli) => {
              return <Nota nazev={objektVpoli.id} />;
            })}
          </div>

          <Klavesy zahrano={zahranaKlavesa} />

          <div className="music-symbols"></div>
          <Kviz otazky={questions} />
        </div>
      </main>
    </>
  );
};
