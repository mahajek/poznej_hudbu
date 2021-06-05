import React from 'react';
import { render } from 'react-dom';
import './style.css';

import { Kviz } from '../../components/Kviz';
import { Navigace } from '../../components/Navigace';
import { Umelci } from '../../components/Umelci';

export const Composers = () => {
  const questions = [
    {
      questionText: 'Kdo je autorem skladby "Vltava?"',
      answerOptions: [
        { answerText: 'Bedřich Smetana', isCorrect: true },
        { answerText: 'Ludwig van Beethoven', isCorrect: false },
        { answerText: 'František Škroup', isCorrect: false },
        { answerText: 'Antonín Dvořák', isCorrect: false },
      ],
    },
    {
      questionText: 'Poznáš skladatele na obrázku?',
      obrazek:
        'https://upload.wikimedia.org/wikipedia/commons/6/6f/Beethoven.jpg',
      answerOptions: [
        { answerText: 'Bedřich Smetana', isCorrect: false },
        { answerText: 'Ludwig van Beethoven', isCorrect: true },
        { answerText: 'František Škroup', isCorrect: false },
        { answerText: 'Antonín Dvořák', isCorrect: false },
      ],
    },
    {
      questionText: 'Který umělec byl známý svou "Moonwalk"?',
      answerOptions: [
        { answerText: 'Michael Jackson', isCorrect: true },
        { answerText: 'David Bowie', isCorrect: false },
        { answerText: 'Prince', isCorrect: false },
        { answerText: 'Phil Collins', isCorrect: false },
      ],
    },
    {
      questionText: 'Kde se narodil Wolfgang Amadeus Mozart?',
      answerOptions: [
        { answerText: 'Linz', isCorrect: false },
        { answerText: 'Innsbruck', isCorrect: false },
        { answerText: 'Vídeň', isCorrect: false },
        { answerText: 'Salzburg', isCorrect: true },
      ],
    },
  ];

  return (
    <>
      <div className="main-page">
      <div className="main-page__navigace">
        <h1 className="main-page__nadpis">Poznej umělce</h1>
        <Navigace />
        </div>
        <div className="main-page__composers">
          <Umelci />
          <Kviz otazky={questions} />
        </div>
      </div>
    </>
  );
};
