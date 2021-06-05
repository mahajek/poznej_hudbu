import { render } from 'react-dom';
import './style.css';
import React, { useState } from 'react';

import { Nastroje } from '../../components/Nastroje';
import { Kviz } from '../../components/Kviz';
import { Navigace } from '../../components/Navigace';

export const Instruments = () => {
  const questions = [
    {
      questionText: 'Jaký nástroj je na obrázku?',
      answerOptions: [
        { answerText: 'Akustická kytara', isCorrect: false },
        { answerText: 'Flétna', isCorrect: false },
        { answerText: 'Harfa', isCorrect: false },
        { answerText: 'Saxofon', isCorrect: true },
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
      <main>
        <div className="main-page">
          <h1 className="main-page__nadpis">Poznej nástroje</h1>
          <Navigace />
          <Kviz otazky={questions} />
          <Nastroje />
        </div>
      </main>
    </>
  );
};
