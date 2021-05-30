import React, { useState } from 'react';
import { render } from 'react-dom';
import './style.css';

import { Klavesy } from '../../components/Klavesy/index';
import { Kviz } from '../../components/Kviz/index';
import { ovcaciCtveraci } from './ovcaciCtveraci.js';
import { Nota } from '../../components/Nota/index';

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

  const zahranaKlavesa = (klavesa) => {
    setNota(klavesa);
  };
  return (
    <>
      <main>
        <div className="main-page">
          <h1>Poznej noty</h1>
          {nota}
          <div className="ton">
            {tony.map((objektVpoli) => {
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
