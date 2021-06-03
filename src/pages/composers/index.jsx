import React from 'react';
import { render } from 'react-dom';
import './style.css';

import { Kviz } from '../../components/Kviz';
import { Navigace } from '../../components/Navigace';
import { Umelci } from '../../components/Umelci';

export const Composers = () => {
  const questions = [
    {
      questionText: 'Kdo je autorem naší státní hymny "Kde domov můj?',
      answerOptions: [
        { answerText: 'Bedřich Smetana', isCorrect: false },
        { answerText: 'Ludwig van Beethoven', isCorrect: false },
        { answerText: 'František Škroup', isCorrect: true },
        { answerText: 'Antonín Dvořák', isCorrect: false },
      ],
    },
    {
      questionText: 'Poznáš skladatele na obrázku?',
      obrazek:
        'https://upload.wikimedia.org/wikipedia/commons/6/6f/Beethoven.jpg',
      answerOptions: [
        { answerText: 'Bedřich Smetana', isCorrect: false },
        { answerText: 'Ludwig van Beethoven', isCorrect: false },
        { answerText: 'František Škroup', isCorrect: true },
        { answerText: 'Antonín Dvořák', isCorrect: false },
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
      answerOptions: [
        { answerText: '1', isCorrect: false },
        { answerText: '4', isCorrect: false },
        { answerText: '6', isCorrect: false },
        { answerText: '7', isCorrect: true },
      ],
    },
  ];

  return (
    <>
      <div className="main-page">
        <h1 className="main-page__nadpis">Poznej umělce</h1>
        <Navigace />
        <Umelci />
        <Kviz otazky={questions} />
      </div>
    </>
  );
};
